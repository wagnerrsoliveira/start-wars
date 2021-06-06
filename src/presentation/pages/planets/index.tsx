import { IPlanet } from 'models/planet';
import React, { useEffect, useState } from 'react';
import { getPlanetsService } from 'server/getPlanetsService';
import { baseApiUrl, nodeEnvi } from 'utils/env';

function Planets() {
  const [list, setList] = useState<IPlanet[]>([]);
  useEffect(() => {
    async function loadPlanets() {
      console.log('baseApiUrl', baseApiUrl, nodeEnvi);
      const result = await getPlanetsService();
      if (result.Success) {
        setList(result.Data?.results || []);
      }
    }
    loadPlanets();
  }, []);
  return (
    <div>
      Star-wars planets
      {list.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
}

export default Planets;
