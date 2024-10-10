const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

// Task 1 - Use find method to return the first water creatures name
const waterCreature = mythicalCreatures.find(function(creature){
	return creature.type === "Water"
});
console.log("Creature Name: " + waterCreature.name);

//Task 2 - Use findIndex method to return the index of the Griffin
const wheresGrif = mythicalCreatures.findIndex(function(creature){
	return creature.name === "Griffin"
});
console.log(wheresGrif);

//Task 3 
const seen = mythicalCreatures.find(function(creature){
	return creature.lastSeen === "Enchanted Forest"
});
console.log("Creature Name: " + seen.name);