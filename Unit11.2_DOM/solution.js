// Task 1 - User innerText to change text
document.getElementById("task1").innerText = "Consider this content changed!";

//Task 2 - Use innerHTML to add a submit button
document.getElementById("task2").innerHTML = "<button>Submit</button>";

//Task 3 - Change Background color of page
document.body.style.backgroundColor = "#232323";

//Task 4 - Make all elements with class 'item' have a border 
function task4() {
    document.querySelectorAll(".item").forEach(item =>
        {
            item.style.border = "2px solid black";
     });
    };
task4();

//Task 5 - Change link href
document.getElementById("task5").href = "https://www.springboard.com/";

//Task 6 - Change value to "DOM Master"
document.getElementById("task6").value = "DOM Master";

//Task 7 - Use classList to add a 'new-class'
document.getElementById("task7").classList.add("new-class");

//Task 8 - Append a new button under this element
const newButton = document.createElement("button");
	newButton.innerText = "New Button";
	document.getElementById("task8").appendChild(newButton);

//Task 9 - Remove this element
const task9 = document.getElementById("task9");
	task9.parentNode.removeChild(task9);
