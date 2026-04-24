'use client';

import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';

// URL hiper estável com o desenho (GeoJSON) dos estados do Brasil
const geoUrl = "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";

// Nossos dados de risco
const dadosEstados = {
  "BA": { risco: "Crítico", info: "Salvador lidera em número de pessoas em áreas suscetíveis.", cor: "#EF4444" },
  "SP": { risco: "Crítico", info: "Litoral (São Sebastião) e interior sofrem com eventos extremos frequentes.", cor: "#EF4444" },
  "RJ": { risco: "Crítico", info: "Capital e cidades como Mangaratiba enfrentam altos acumulados e deslizamentos.", cor: "#EF4444" },
  "MG": { risco: "Crítico", info: "Maior número de municípios em alerta (283 cidades), incluindo BH e Zona da Mata.", cor: "#EF4444" },
  "PE": { risco: "Crítico", info: "Recife está entre as capitais com maior área de risco para deslizamentos.", cor: "#EF4444" },
  "AM": { risco: "Alerta", info: "Tabatinga registrou a maior precipitação recente do país.", cor: "#F97316" },
  "PA": { risco: "Alerta", info: "Belém tem alta frequência de chuvas, sempre no topo da lista anual.", cor: "#F97316" },
  "RS": { risco: "Alerta", info: "Passo Fundo e outras regiões enfrentam acumulados altíssimos.", cor: "#F97316" },
};

export default function MapaBrasil() {
  const [conteudoTooltip, setConteudoTooltip] = useState("");

  return (
    <div className="relative w-full max-w-2xl mx-auto flex justify-center items-center py-8">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 800,
          center: [-54, -15] 
        }}
        className="w-full h-auto drop-shadow-xl"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const siglaUf = geo.properties.sigla; 
              const nomeEstado = geo.properties.name;
              const estadoData = dadosEstados[siglaUf];
              
              const corPadrao = estadoData ? estadoData.cor : "#E2E8F0"; 
              const corHover = estadoData ? "#991B1B" : "#CBD5E1"; 

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={corPadrao}
                  stroke="#FFFFFF"
                  strokeWidth={1}
                  data-tooltip-id="mapa-tooltip"
                  onMouseEnter={() => {
                    if (estadoData) {
                      setConteudoTooltip(`
                        <div class="font-bold text-lg border-b border-gray-600 pb-1 mb-2">${nomeEstado} - Risco ${estadoData.risco}</div>
                        <div class="text-sm max-w-xs leading-relaxed">${estadoData.info}</div>
                      `);
                    } else {
                      setConteudoTooltip(`<div class="font-bold">${nomeEstado}</div><div class="text-xs text-gray-300 mt-1">Risco Moderado/Baixo</div>`);
                    }
                  }}
                  onMouseLeave={() => {
                    setConteudoTooltip("");
                  }}
                  style={{
                    default: { outline: "none", transition: "all 0.3s" },
                    hover: { fill: corHover, outline: "none", cursor: "pointer", transition: "all 0.3s" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      <Tooltip 
        id="mapa-tooltip" 
        html={conteudoTooltip}
        className="z-50 bg-gray-900 !opacity-100 rounded-xl shadow-2xl p-4"
      />
    </div>
  );
}