import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSpaceTravel } from "../context/SpaceTravelContext";

const BuildSpacecraftPage = () => {
  const { buildSpacecraft } = useSpaceTravel();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    capacity: "",
    description: "",
    pictureUrl: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, capacity, description } = form;
    if (!name || !capacity || !description) {
      setError("Name, capacity, and description are required.");
      return;
    }
    try {
      await buildSpacecraft({
        ...form,
        capacity: Number(capacity),
        pictureUrl: form.pictureUrl || undefined,
      });
      navigate("/spacecrafts");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <button onClick={() => navigate(-1)}>← Back</button>
      <h1>Build a New Spacecraft</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name*</label>
          <input name="name" value={form.name} onChange={handleChange} />
        </div>
        <div>
          <label>Capacity*</label>
          <input
            name="capacity"
            type="number"
            value={form.capacity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description*</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Picture URL</label>
          <input
            name="pictureUrl"
            value={form.pictureUrl}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Construct</button>
      </form>
    </div>
  );
};

export default BuildSpacecraftPage;
