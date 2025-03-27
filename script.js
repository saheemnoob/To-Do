const ul = document.querySelector(".ul");
let ip = document.getElementById("task");

function add() {
    const t = ip.value.trim();
    if (t === "") {
        alert("Task can't be empty...");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `${t} <button class="task-button" onclick="removeTask(this)">Task Completed</button>`;

    ul.appendChild(li);
    ip.value = "";
}

function removeTask(button) {
    const li = button.parentElement;
    alert(`${li.textContent.replace("Task Completed", "").trim()} task completed...`);
    li.remove();
}
