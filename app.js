let TextBox = document.getElementById("input-box");
let ListContainer = document.getElementById("list-container");
function getvalue(){
 if(TextBox.value ==""){
    alert("you must write something")
 }
 else{
    let li = document.createElement("li");
    li.innerHTML = TextBox.value;
    ListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span);
 }

 TextBox.value = "";
 SaveData();
}

ListContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
},false)

function SaveData(){
    localStorage.setItem("Data",ListContainer.innerHTML);
}

function showdata(){
    ListContainer.innerHTML = localStorage.getItem("Data");
}

showdata();