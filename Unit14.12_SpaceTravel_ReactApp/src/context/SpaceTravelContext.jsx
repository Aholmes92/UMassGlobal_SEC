import React, { createContext, useContext, useEffect, useState } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";

const SpaceTravelContext = createContext();

export const SpaceTravelProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEverything = async () => {
    try {
      setLoading(true);
      const [p, s] = await Promise.all([
        SpaceTravelApi.getPlanets(),
        SpaceTravelApi.getSpacecrafts(),
      ]);
      setPlanets(p);
      setSpacecrafts(s);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEverything();
  }, []);

  const buildSpacecraft = async (payload) => {
    await SpaceTravelApi.buildSpacecraft(payload);
    await fetchEverything();
  };

  const destroySpacecraft = async (id) => {
    await SpaceTravelApi.destroySpacecraftById(id);
    await fetchEverything();
  };

  const sendSpacecraft = async (spacecraftId, targetPlanetId) => {
    await SpaceTravelApi.sendSpacecraftToPlanet({ spacecraftId, targetPlanetId });
    await fetchEverything();
  };

  return (
    <SpaceTravelContext.Provider
      value={{
        planets,
        spacecrafts,
        loading,
        error,
        buildSpacecraft,
        destroySpacecraft,
        sendSpacecraft,
        refetch: fetchEverything,
      }}
    >
      {children}
    </SpaceTravelContext.Provider>
  );
};

export const useSpaceTravel = () => useContext(SpaceTravelContext);
