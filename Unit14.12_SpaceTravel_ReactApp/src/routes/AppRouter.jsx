import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SpacecraftsPage from "../pages/SpacecraftsPage";
import SpacecraftPage from "../pages/SpacecraftPage";
import BuildSpacecraftPage from "../pages/BuildSpacecraftPage";
import PlanetsPage from "../pages/PlanetsPage";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/spacecrafts" element={<SpacecraftsPage />} />
    <Route path="/spacecrafts/new" element={<BuildSpacecraftPage />} />
    <Route path="/spacecraft/:id" element={<SpacecraftPage />} />
    <Route path="/planets" element={<PlanetsPage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRouter;
