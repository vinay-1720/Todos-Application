let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [
  {
    text: "Learn HTML",
    uniqueNo:1
  },
  {
    text: "Learn CSS",
    uniqueNo:2
  },
  {
    text: "Learn JavaScript",
    uniqueNo:3
  }
];

function createAndAppendTodo(todo) {
    let checkboxId="checkbox"+todo.uniqueNo;
    let labelId="label"+todo.uniqueNo;
    let todoId="todo"+todo.uniqueNo;


    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id=todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);
    inputElement.onclick=function(){
        ontodoStatusChange(checkboxId,labelId);
    }

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id=labelId;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);
    deleteIcon.onclick=function(){
        onDeletetodo(todoId);
    }
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}

function ontodoStatusChange(checkboxId,labelId){
    let checkboxElement=document.getElementById(checkboxId);
    

    let labelElement=document.getElementById(labelId);

    if (checkboxElement.checked===true){
        labelElement.classList.add("checked");
    }
    else{
        labelElement.classList.remove("checked");
    }
}
function onDeletetodo(todoId){
    let todoElement=document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}