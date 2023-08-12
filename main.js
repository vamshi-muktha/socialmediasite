let form=document.getElementById("inputpart");
let input=document.getElementById("message");
let output=document.getElementById("output");
var user = localStorage.getItem('myValue');
form.addEventListener("submit", function(){
    acceptmessage();
});
let data = [];
function acceptmessage() {
  data.push({
    input: input.value,
    user: user,
  });
  localStorage.setItem("data", JSON.stringify(data));
  addmessage();
  console.log(data);
};
function addmessage(){
  data.map((x, y) => {
    return (output.innerHTML += `
     <div id=${y}>
     <span class="set">
     <span>${x.user}</span>
      <span class="messagestyle">
        <span >${x.input}</span>
        <i onClick ="deleteTask(this)" class="fas fa-trash-alt trash"></i>
      </span>
    </span>
   </div>
  `);
  });
};
  (() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);
    addmessage();
  })();
  function deleteTask(e){
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
  };