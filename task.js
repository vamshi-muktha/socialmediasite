var input=document.getElementById("input");
var tasklist=document.getElementById("tasklist");
var form=document.getElementById("form");
form.addEventListener("submit", function(){
  accepttask();
});
let task = [];
function accepttask() {
  task.push({
    input: input.value,
  });
  localStorage.setItem("task", JSON.stringify(task));
  addtask();
  console.log(task);
};
function addtask(){
  task.map((x, y) => {
    return (tasklist.innerHTML += `
      <div id=${y}>
      <div class="set">
        <span class="taskstyle" >${x.input}</span>
        <i onClick ="deleteTask(this)" class="fas fa-trash-alt trash"></i>
    </div>
          </div>
    `);
  });
};
function deleteTask(e){
  e.parentElement.parentElement.remove();
  task.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("task", JSON.stringify(task));
  console.log(task);
};
(() => {
  task = JSON.parse(localStorage.getItem("task")) || [];
  console.log(task);
  addtask();
})();
