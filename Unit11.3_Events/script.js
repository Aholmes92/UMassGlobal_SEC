//Step 1. Wrap code in a callback function of an event listener (`DOMContentLoaded`).
document.addEventListener("DOMContentLoaded", function ()
{
	//Step 2. Get elements from DOM (index.html) and save to a variable
    const boxContainer = document.getElementById("box-container");
	const newBoxButton = document.getElementById("new-box-button");
	const colorForm = document.getElementById("color-form");
	const colorInput = document.getElementById("color-input");
    
    //Step 3. Variables to store the box color and counter for the box ID.
	let boxColor = null; // Stores the selected box color from the form.
	let boxIdCounter = 0; // Counter for assigning unique IDs to new boxes.

    //Step 4. Get value from the color input and set to all boxes using the class. Reset input
    colorForm.addEventListener("submit", function (event)
	{
		event.preventDefault(); // Prevents the default event.

		const newColor = colorInput.value.trim();  // .value to capture input and .trim() method removes whitespaces.

		const boxes = document.querySelectorAll(".box"); // Get all boxes by targeting the class
		for (const box of boxes)
		{
			box.style.backgroundColor = newColor; //set background color to the color input value.
		}

		colorInput.value = ""; // Clears the color input field after from submission.

		boxColor = newColor; // Updates the stored box color with the new selection.
	});

	//Step 5. Function to add a box.
    function addNewBox ()
	{
		const box = document.createElement("div");
		box.setAttribute("data-box-id", boxIdCounter.toString()); // Stores the box ID to its data attribute.
		box.textContent = "Box " + boxIdCounter; // Sets the box ID as text.
		box.className = "box"; // Sets a CSS class.
		box.style.backgroundColor = boxColor; // Sets the box's background color using the last selected box color.
		boxContainer.appendChild(box); // Appends it to the box container element as its child.

		boxIdCounter++; // Increments the counter since the ID is used for this box.
	}

    //Step 6. Add event listener to execute addNewBox() when button clicked
	newBoxButton.addEventListener("click", function ()
	{
		addNewBox();
	});

    //Step 7. Function to remove box when element is double clicked
	document.addEventListener("dblclick", function (event)
	{
		if (event.target.classList.contains("box")) //checks if the element clase list contains box
		{
			event.target.remove(); // Removes the clicked box.
		}
	});

	//Step 8. Display page coordinates when mouse hover over boxes
    document.addEventListener("mouseover", function (event)
	{
		if (event.target.classList.contains("box"))
		{
			event.target.textContent = "x: " + event.pageX + " , y: " + event.pageY; // Temporarily change display text to show coordinates.
		}
	});

	//Step 9. Display box Id when mouse leaves the element
    document.addEventListener("mouseout", function (event)
	{
		if (event.target.classList.contains("box"))
		{
			/* Restores the original text using the box ID from the data attribute. */
			const boxId = event.target.getAttribute("data-box-id");
			event.target.textContent = "Box " + boxId;
		}
	});

	//Step 10. Add new box when the "N" key is pressed
    window.addEventListener("keydown", function (event)
	{
		/* Ignores key presses made for color input. */
		if (event.target.id === "color-input")
		{
			return;
		}

		/* Adds a new box when the "n" key is pressed. */
		if (event.key === "n" || event.key === "N")
		{
			addNewBox(); // Adds a new box.
		}
	});
});