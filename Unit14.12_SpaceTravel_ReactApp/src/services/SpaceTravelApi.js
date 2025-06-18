import SpaceTravelMockApi from "./SpaceTravelMockApi";

const wrap = async (fn, args) => {
  const res = await fn(args);
  if (res.isError) {
    throw new Error(res.data || "Unknown API error");
  }
  return res.data;
};

const SpaceTravelApi = {
  getPlanets: () => wrap(SpaceTravelMockApi.getPlanets),
  getSpacecrafts: () => wrap(SpaceTravelMockApi.getSpacecrafts),
  getSpacecraftById: (id) => wrap(SpaceTravelMockApi.getSpacecraftById, { id }),
  buildSpacecraft: ({ name, capacity, description, pictureUrl }) =>
    wrap(SpaceTravelMockApi.createSpacecraft, { name, capacity, description, pictureUrl }),
  destroySpacecraftById: (id) => wrap(SpaceTravelMockApi.destroySpacecraftById, { id }),
  sendSpacecraftToPlanet: ({ spacecraftId, targetPlanetId }) =>
    wrap(SpaceTravelMockApi.sendSpacecraftToPlanet, { spacecraftId, targetPlanetId }),
};

export default SpaceTravelApi;
