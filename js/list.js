//Runs when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    //Select all tasks
    const existingTasks = document.querySelectorAll("#task-list li");
    // Iterate through each existing task
    existingTasks.forEach(function (task) {
        const taskText = task.querySelector("span");

        //Add click event
        task.addEventListener("click", function (event) {
            //exclude button
            if (event.target.tagName !== 'BUTTON') {
                taskText.style.textDecoration = "line-through";
            }
        });

        // Create a delete button for each task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            task.parentNode.removeChild(task); //remove when clciked
        };

        //adding button
        task.appendChild(deleteButton);
    });
});

// Add a new task
function addTask() {
    //input for new task
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
        alert("You must write something!");
        return;
    } else {
        //get task list
        const taskList = document.getElementById("task-list");

        //create new list item
        const newTaskItem = document.createElement("li");

        //create span element
        const span = document.createElement("span");
        span.textContent = taskText;

        newTaskItem.appendChild(span);

        newTaskItem.addEventListener("click", function (event) {
            if (event.target.tagName !== 'BUTTON') {
                span.style.textDecoration = "line-through";
            }
        });

        // Create a delete button for the new task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            taskList.removeChild(newTaskItem);
        };

        newTaskItem.appendChild(deleteButton);
        taskList.appendChild(newTaskItem);

        //input clear
        taskInput.value = "";

    }
}





