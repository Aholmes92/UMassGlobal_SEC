# Space Travel Project Instructions

## **Requirements**

- Design a welcoming **home page** that outlines the application's functionality.
- Develop a dedicated **spacecrafts page** (both the plural and the singular forms are "spacecraft", but the word "spacecrafts" is used intentionally to separate this page from the spacecraft page) that:
    - Displays all spacecraft and their details.
    - Provides navigation options for viewing specific spacecraft details, constructing new spacecraft, and decommissioning existing ones.
- Craft a detailed **spacecraft page** that presents comprehensive information about a particular spacecraft.
- Implement a **construction page** for spacecraft that:
    - Allows navigation back to the previous page.
    - Facilitates the creation of new spacecraft.
    - Shows errors for missing required fields (name, capacity, description).
- Create a **planets page** that:
    - Lists all planets and stationed spacecraft.
    - Enables planet selection for spacecraft dispatching, ensuring the destination differs from the current location.
- Integrate a loading component to manage API response times.
- Redirect all unmatched routes to the homepage.

## API

For this project, you are given a mock API in the starter code that stores the data in the local storage. You shouldn't touch the `/services/SpaceTravelMockApi.js` file, which mimics the back-end. Instead, you should use `/services/SpaceTravelApi.js`, which uses the API. In real life, you should create such a file that uses the `axios` library to use an API.

## Data Structures

**Response**

```jsx
{
  isError: <boolean>,
  data: <any>
}
```

**Planet**

```jsx
{
  id: <int>, // means data type is an integer
  name: <string>,
  currentPopulation: <int>,
  pictureUrl: [<string>] // means optional
}
```

Spacecraft

```jsx
{
  id: <string>,
  name: <string>,
  capacity: <int>,
  description: <string>,
  pictureUrl: [<string>],
  currentLocation: <int>
}
```

## Methods

| getPlanets | getPlanets (): Array<planet> | Fetches all planets. |
| --- | --- | --- |
| getSpacecrafts | getSpacecrafts (): Array<spacecraft> | Fetches all spacecraft. |
| getSpacecraftById | getSpacecraftById ({id: <string>}): <spacecraft> | Fetches a spacecraft by its ID. |
| buildSpacecraft | createSpacecraft ({name: <string>, capacity: <int>, description <string>, pictureUrl: [<string>]}): void (means pictureUrl is optional) | Builds a spacecraft on the Earth by generating an ID. |
|  destroySpacecraftById | destroySpacecraftById ({id: <int>}): void | Deletes a spacecraft by its ID. |
| sendSpacecraftToPlanet | sendSpacecraftToPlanet ({spacecraftId: <string>, targetPlanetId: <int>}): void | Transfer people by sending the spacecraft from its currently located planet to the target planet.
- If the capacity is greater than the current population of the currently located planet, it fills as much as it gets.
- Throws an error if the target planet is the same as the currently located planet.
 |

You can access your starter code below. The folder structure ensures adherence to best practices:

- `components`: Contains components that are used as building blocks for pages.
- `context`: Contains providers that enable consuming components to subscribe to context changes.
- `pages`: Contains components that are used as a page. Pages are the components used to be rendered by a route.
- `routes`: Contains components that have route rendering logic.
- `services`: Contains services to reach external APIs.

