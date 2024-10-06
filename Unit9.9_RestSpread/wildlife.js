/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function animalSightings(...animals) {
	console.log(animals);
}
animalSightings("lions", "tigers", "bears")

/* Task 2: Merge Habitat Areas */
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];

const mergedHabitats = [...forestHabitats, ...savannahHabitats];
console.log(mergedHabitats)

/* Task 3: Update Conservation Status */
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
const rhinoUpdated = {...rhinoStatus, status: "Change in Habitat"}; //Spread rhinoStatus and updated existing property
console.log(rhinoUpdated)


/* Task 4: Catalog Genetic Diversity */
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};

const lionProfile2 = {...lionProfile, genetics: "Feline"}; 
console.log(lionProfile2);
console.log(lionProfile)

/*
 * Observations:
 * The clone does not affect the original object; top-level (shallow) are duplicated and are NOT the same reference. 
 */

/* Task 5: Analyze Ecosystem Health */
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};

const ecosystemHealth2 = {...ecosystemHealth, foodSupply: {...ecosystemHealth.foodSupply, herbivores: "Plenty"}};
console.log(ecosystemHealth2);
console.log(ecosystemHealth)
/* Observations:
* While top-level (shallow) properties are duplicated and are NOT the same reference, nested properties ARE the same reference, and modifying copies does affect the original
*/

