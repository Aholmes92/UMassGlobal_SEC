const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];

const userStatus = users.map(function(user) {   
	return {
		fullName: user.firstName + " " + user.lastName,
		membershipStatus: user.points > 100 ? "Premium" : "Standard"
	}
});
console.log(userStatus)

//map method creates a new array of the same length of a referenced array. Runs a function on item. 