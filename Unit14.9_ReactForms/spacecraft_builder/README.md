## Spacecraft Builder 

In this exercise, we will practice forms in React by creating a comprehensive Spacecraft Builder application.

This project offers a fantastic chance to deepen your grasp of React fundamentals, including component-based architecture, state management, handling user inputs, and managing the interaction between parent and child components.

Your main goal is to develop an application that enables users to design their spacecraft by inputting their items into the inventory. The application also displays inventory, each with detailed information such as the item's name, quantity, and purpose. Users will also be able to delete each item.

## Component Design

The Spacecraft Builder application will consist of several components, each dedicated to handling a distinct segment of the application's functionality. Here's a breakdown of the components you'll develop and their roles:

- `SpacecraftBuilder` is the pivotal component that maintains the inventory for the spacecraft design process.
- `ItemForm` allows user input for adding items to the inventory. It functions by invoking callback functions handed down from `SpacecraftBuilder`, demonstrating how child components can initiate state changes in the parent.
- `InventoryDisplay` is a stateless component that showcases items in the inventory.
- `ItemCard` provides detailed information about each item, such as its name, quantity, and purpose.
- `ItemAction` enables users to delete an item. It functions by invoking callback functions handed down from `SpacecraftBuilder` to `InventoryDisplay`.

## Tasks 📋

1. Create a `SpacecraftBuilder` component to manage inventory with the following specifics:
    - Manage the state of inventory.
    - Render `ItemForm` to allow item submission. To add items to the inventory on submission, pass down a callback function that handles it.
    - Render `InventoryDisplay` to showcase inventory items and delete them. To enable deletion, pass down a callback function that handles it.
2. Implement an `ItemForm` component, which has a form for users to input new items into the inventory. This component should update the inventory state in `SpacecraftBuilder` upon form submission using the callback function.
    - Make all fields required.
    - Validate each field on form submission. If a field is missing, highlight the field.
    - Clear the form on successful form submission.
3. Implement an `InventoryDisplay` component to display inventory by taking it as props.
    - Render `ItemCard` for each item to display its details, such as name, quantity, and purpose.
    - Render `ItemAction` for each item to delete it.
4. Implement an `ItemCard` component to display item details.
5. Implement an `ItemAction` component to provide a button for deleting the item by invoking a callback function passed from InventoryDisplay, which is also passed from `SpacecraftBuilder`.