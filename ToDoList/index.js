let inp = document.querySelector("input");
let addBtn = document.querySelector(".addBtn");
let ul = document.querySelector("ul");
let tasks = document.querySelector(".tasks");
let p = document.querySelector(".addtask");


addBtn.addEventListener("click", (event) => {
  p.innerText =" ";
  let showData = inp.value;
  if(showData.length==0){
    console.log("plase add the data");
  }
 else{
  let li = document.createElement("li");
  li.innerText= showData;
  let creatDel = document.createElement("button");
  creatDel.innerText = "delete";
  creatDel.classList.add("delBtn");
  li.appendChild(creatDel);
  ul.appendChild(li);
  inp.value = "";
 }
});


ul.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    event.target.parentElement.remove();
  }
  if(ul.firstElementChild==null){
      p.innerText="Add some task"
  }
});
