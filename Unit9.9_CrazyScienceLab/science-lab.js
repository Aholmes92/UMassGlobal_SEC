/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
let participant = {};

function createParticipant(name, age, studyField) {
    participant = {name, age, studyField};
    return participant
};
createParticipant("Tom", 22, "Computer Science");

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.

participant.displayInfo = function() {
      console.log("Name: " + this.name, "Age: " + this.age, "Study Field: " + this.studyField);
    };
participant.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.

participant.displayInfo = () => {
    console.log("Name: " + this.name, "Age: " + this.age, "Study Field " + this.studyField);
};

/*
 * Observations:
 * 'THIS' does not work with arrow functions; returns 'undefined'
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.

function updateParticipantInfo(property, value) {
    return {...participant, 
        [property] : value
    };
};
updateParticipantInfo("year", "Sophmore");
