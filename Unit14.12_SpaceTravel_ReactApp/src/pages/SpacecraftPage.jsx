import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import SpaceTravelApi from "../services/SpaceTravelApi";
import { useSpaceTravel } from "../context/SpaceTravelContext";

const SpacecraftPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { destroySpacecraft, planets } = useSpaceTravel();
  const [spacecraft, setSpacecraft] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await SpaceTravelApi.getSpacecraftById(id);
      setSpacecraft(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  if (!spacecraft) return <p>No data</p>;

  const locationName = planets.find((p) => p.id === spacecraft.currentLocation)?.name || "Unknown";

  return (
    <div className="container">
      <button onClick={() => navigate(-1)}>← Back</button>
      <h1>{spacecraft.name}</h1>
      <p><strong>Capacity:</strong> {spacecraft.capacity}</p>
      <p><strong>Current Location:</strong> {locationName}</p>
      <p>{spacecraft.description}</p>
      {spacecraft.pictureUrl && <img alt={spacecraft.name} src={spacecraft.pictureUrl} />}
      <button onClick={() => destroySpacecraft(spacecraft.id)}>Decommission</button>
    </div>
  );
};

export default SpacecraftPage;
