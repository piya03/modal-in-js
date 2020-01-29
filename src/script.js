let btn = document.getElementById("btn");
let modalBox = document.getElementById("modalBox");
let close = document.getElementById("close");
btn.addEventListener("click", openModal);
function openModal() {
  modalBox.style.display = "block";
}
close.onclick = function() {
  modalBox.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modalBox) {
    modalBox.style.display = "none";
  }
};
let demo1 = document.getElementById("demo1");

let name = document.getElementById("name");
let email = document.getElementById("email");
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", addInfo);
function addInfo() {
  if (name.value === "" && email.value === "") {
    return;
  }
  let wrapdiv = document.createElement("div");
  wrapdiv.className += "newClass";
  let newdiv1 = document.createElement("div");
  let newdiv2 = document.createElement("div");
  let newdiv3 = document.createElement("div"); 
  newdiv3.className += "removeAdd ";
  newdiv3.className += "fa fa-times";
 
  console.log(newdiv3, "newdiv3");
  newdiv1.innerHTML = name.value;
  newdiv2.innerHTML = email.value;
  newdiv3.innerHTML = "";

  wrapdiv.append(newdiv1);
  wrapdiv.append(newdiv2);
  wrapdiv.append(newdiv3);

  demo1.append(wrapdiv);
 let removeAdd = document.querySelectorAll(".removeAdd");
       console.log(removeAdd,"god")
for(let i = 0; i < removeAdd.length; i++){
     removeAdd[i].onclick = function(e){
       console.log(e.target.parentElement,"r u ")
       e.target.parentElement.style.display = "none"
  }
}

  name.value = "";
  email.value = "";
}
//////om enter////// 
window.addEventListener("keydown", handleKeyPress);
function handleKeyPress(event) { 
  if (event.keyCode === 13) { 
    addInfo();
  }
}

