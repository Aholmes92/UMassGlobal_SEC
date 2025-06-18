import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useSpaceTravel } from "../context/SpaceTravelContext";

const SpacecraftsPage = () => {
  const { spacecrafts, loading, destroySpacecraft } = useSpaceTravel();
  const navigate = useNavigate();

  if (loading) return <Loading />;

  return (
    <div className="container">
      <h1>Spacecraft Fleet</h1>
      <button onClick={() => navigate("/spacecrafts/new")}>Build New Spacecraft</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capacity</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {spacecrafts.map((sc) => (
            <tr key={sc.id}>
              <td><Link to={`/spacecraft/${sc.id}`}>{sc.name}</Link></td>
              <td>{sc.capacity}</td>
              <td>{sc.currentLocation}</td>
              <td>
                <button onClick={() => navigate(`/spacecraft/${sc.id}`)}>Details</button>
                <button onClick={() => destroySpacecraft(sc.id)}>Decommission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpacecraftsPage;
