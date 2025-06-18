import React, { useState } from "react";
import Loading from "../components/Loading";
import { useSpaceTravel } from "../context/SpaceTravelContext";

const PlanetsPage = () => {
  const {
    planets,
    spacecrafts,
    loading,
    sendSpacecraft,
  } = useSpaceTravel();
  const [error, setError] = useState("");

  if (loading) return <Loading />;

  const handleDispatch = async (scId, targetId) => {
    try {
      await sendSpacecraft(scId, Number(targetId));
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Planets</h1>
      {error && <p className="error">{error}</p>}
      {planets.map((planet) => (
        <div key={planet.id} className="planet-card">
          <h2>{planet.name}</h2>
          <p>Population: {planet.currentPopulation}</p>
          <h3>Stationed Spacecraft</h3>
          <ul>
            {spacecrafts
              .filter((sc) => sc.currentLocation === planet.id)
              .map((sc) => (
                <li key={sc.id}>
                  {sc.name} (cap. {sc.capacity})
                  <select
                    defaultValue=""
                    onChange={(e) =>
                      e.target.value &&
                      handleDispatch(sc.id, e.target.value)
                    }
                  >
                    <option value="" disabled>
                      Send to...
                    </option>
                    {planets
                      .filter((p) => p.id != planet.id)
                      .map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                  </select>
                </li>
              ))}
            {spacecrafts.every((sc) => sc.currentLocation !== planet.id) && (
              <li>No spacecraft here yet.</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PlanetsPage;
