const ul = document.querySelector(".ul");
let ip = document.getElementById("task");

function add(){

const li = document.createElement("li");
let t = document.getElementById("task").value;
if(t===""){
    alert("Task can't be empty...");
    return;
}
const del = document.createElement("button");
del.innerHTML="Task Completed";
del.style.color = "red";
del.style.cursor = "pointer"; 
del.addEventListener("mouseenter", () => {
    del.style.color = "black";
    del.style.backgroundColor = "rgba(216, 113, 113, 0.9)";
});

del.addEventListener("mouseleave", () => {
    del.style.color = "red";
    del.style.backgroundColor = "transparent";
});
del.onclick = function () {
    li.remove();
    del.remove();
    let a = li.innerHTML;
    alert(`${a} task completed...`)
};

li.innerHTML = t;
ul.appendChild(li);
ul.appendChild(del);

ip.value="";
}