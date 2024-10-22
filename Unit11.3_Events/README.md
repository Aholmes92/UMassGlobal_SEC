Events Exercise

In this exercise:

- The user should be able to set a color for boxes (this affects both current boxes and new boxes).
- The user should be able to add boxes with the set color to the div with the ID `box-container`:
    - When the button with the ID `new-box-button` is clicked.
    - When the `N` key is pressed.
- The user should be able to remove a box when the box is double-clicked on.
- Each box should display its ID.
- Each box should display its page coordinates when hovered (when the mouse leaves, it displays its ID back).
- Each box should have a class `box` for styling and selecting.

We coded the `index.html` and `style.css` files in the starter code for you. Before you start coding the `script.js` file, please review the `index.html` file.

After you try on your own, please see the steps if you need guidance on the steps you should follow.

## Steps:

1. The `script.js` is included in the head of the `index.html`. To run your code after the DOM is loaded, wrap it with a callback function of an event listener (`DOMContentLoaded`).
2. Get the elements from the DOM that you will work on (box container, new box button, color form, color input).
3. Create variables to store the box color and counter for the box ID.
4. When the form is submitted, get the value from the color input element from Step 2 and set this color to all boxes (to get all boxes, use the class name `box`). Remember to reset the color input element's value and store the color in the box color variable we created in Step 3.
5. Create a function that adds a new box. In this function, set the box ID as content, the class name, and the background color from the box color variable we created in Step 3. Besides, set the box ID to a data attribute. You'll need this attribute to set the display text back to ID when the mouse leaves. Since we used this counter ID, increment it using the counter variable we created in Step 3 to keep its uniqueness.
6. When the new box button is clicked, call the function that we created above that adds a new box.
7. To remove a box, listen to the double-click events in the document. If the event's target's class list contains the value `box`, remove the element.
8. To display a box's page coordinates, listen to the mouse over events in the document. If the event's target's class list contains the value `box`, display the coordinates.
9. To display a box's ID back when the mouse leaves after displaying the box's page coordinates, listen to the mouse out events in the document. If the event's target's class list contains the value `box`, get the ID from the box's data attributes and display it.
10. To create a new box when the `N` key is pressed, listen to the key-down events in the document. If the key is `N` (check both upper and lower cases), call the function that adds a new box. Remember to ignore the event if it is triggered from the color input element.