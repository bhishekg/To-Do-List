const a = document.getElementById("input-box");
const b = document.getElementById("list-container");

function addTask(){
  if(a.value === ''){
    alert("write something");
  }
  else{
  let li = document.createElement("li");
  li.innerHTML = a.value;
  b.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
  }
  a.value = "";
  savaData();
} 
   b.addEventListener("click", function (e){
   if(e.target.tagName === "LI"){
     e.target.classList.toggle("checked");
     savaData();
   }
   else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    savaData();
  }
  
}, false);
function savaData(){
  localStorage.setItem("data", b.innerHTML);
}
function showTask(){
  b.innerHTML = localStorage.getItem("data");
}

showTask();

