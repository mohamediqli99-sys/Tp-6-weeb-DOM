let tachelist=document.getElementById("ul");
let start=document.getElementById("submit");
let input=document.getElementById("inputtache");

start.addEventListener("click",function(e){
  e.preventDefault();
  
  let li=document.createElement("li");
  let inputvalue=input.value;
  li.textContent=inputvalue + " ";
  
  let completebtn=document.createElement("button");
  completebtn.id="completebtn";
  completebtn.textContent="complete ✅";
  
  let supremerbtn=document.createElement("button");
  supremerbtn.id="supremerbtn";
  supremerbtn.textContent="supremer ❌";
  
  completebtn.addEventListener("click",function(){
    li.style.textDecoration="line-through";
  });
  
  supremerbtn.addEventListener("click",function(){
    li.remove();
  });
  
  li.appendChild(completebtn);
  li.appendChild(supremerbtn);
  
  tachelist.appendChild(li);
  
  input.value="";
});

let defaultcomplete=document.getElementById("completebtn");
let defaultsupremer=document.getElementById("supremerbtn");

if(defaultcomplete && defaultsupremer){
  defaultcomplete.addEventListener("click",function(){
    defaultcomplete.parentElement.style.textDecoration="line-through";
  });
  
  defaultsupremer.addEventListener("click",function(){
    defaultsupremer.parentElement.remove();
  });
}
