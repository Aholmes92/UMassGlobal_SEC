// Declare an items variable with an empty array to add/remove items to/from
const items = [];

// export add addItem, removeItem, and listItem functions 
export const addItem = (item) =>
{
	items.push(item);
	console.log('Added: ' + item);
};

/* test adding
addItem("bread");
addItem("milk");
addItem("eggs");
console.log(items); 
*/

export const removeItem = (item) =>
{
	let isRemoved = false;

	for (let i = 0; i < items.length; i++) //Loop through items array, if the item in removeItem is found in items array, mark isRemove true
	{
		if (items[i] === item)  //If item is removed, remove from the items array
		{
			isRemoved = true;
			items.splice(i, 1);
			i--;
		}
	}

	if (isRemoved)
	{
		console.log('Removed: ' + item);
	}
	else
	{
		console.log('Does not exist: ' + item);
	}
};

/* test removing
addItem("Bread");
addItem("Milk");
console.log(items);
removeItem("Milk");
console.log(items);
*/

export const listItems = () =>
{
	console.log(`Items List:`);

	for (const item of items)
	{
		console.log(item);
	}
};