function addTask() {
    const taskTitleInput = document.getElementById("taskTitle");
    const taskDescriptionInput = document.getElementById("taskDescription");
    const taskTitle = taskTitleInput.value.trim();
    const taskDescription = taskDescriptionInput.value.trim();

    if (taskTitle !== "" && taskDescription !== "") {
        const taskList = document.querySelector(".task-list ul");
        const li = document.createElement("li");
        li.innerHTML = `<strong>${taskTitle}:</strong> ${taskDescription}`;
        addButtons(li);

        taskList.appendChild(li);
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
    }
}

function addButtons(task) {
    const completedButton = document.createElement("button");
    completedButton.textContent = "Completed";
    completedButton.classList.add("completed-button");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    task.appendChild(completedButton);
    task.appendChild(deleteButton);

    completedButton.addEventListener("click", function () {
        moveTaskToCompleted(task);
    });

    deleteButton.addEventListener("click", function () {
        deleteTask(task);
    });
}

function moveTaskToCompleted(task) {
    const completedTasks = document.querySelector(".right-section ul");
    task.classList.add("completed");

    task.querySelector(".completed-button").remove();
    task.querySelector(".delete-button").remove();

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", function () {
        deleteTask(task);
    });

    task.appendChild(deleteButton);
    completedTasks.appendChild(task);
}

function deleteTask(task) {
    task.remove();
}
