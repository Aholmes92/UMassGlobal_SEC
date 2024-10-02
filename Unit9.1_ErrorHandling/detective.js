function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

const missions = 20;
const vacationDays = 13;
const motivationDays = 1;
const attendanceDays = 3;

let deservedDays = 0;

for (let i = 0; i < missions; i++) {
	try {
		mysteryOperation();
		deservedDays += vacationDays;
	} catch (error) {
		deservedDays += motivationDays;
	}
	finally {
		deservedDays += attendanceDays;
	}
	
}
console.log(deservedDays)
