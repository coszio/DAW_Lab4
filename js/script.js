
// #1
let post = document.getElementById("ButtonPost");
let clear = document.getElementById("ButtonClear");
let mark = document.getElementById("ButtonMark");
let del = document.getElementById("ButtonDelete");

// #2

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);


// #3 Funciones
function TodoPost(e) {
    e.preventDefault();
    // Necesito obtener el valor del TextArea
    var todo = document.getElementById("todoText");
    var list = document.getElementById("todoList");

    list.innerHTML += `<input type="checkbox" name="todo" /> ${todo.value} <br> `;

}

function TodoDel(e) {
    e.preventDefault();
    var list = document.getElementById("todoList");
    list.innerHTML = "";
}
function TodoMark(e) {
    e.preventDefault();
    var todos = document.getElementsByName("todo");
    for (let i in todos) {
        todos[i].checked = true;
    }
}
function TodoClear(e) {
    e.preventDefault();
    var todos = document.getElementsByName("todo");
    for (let i in todos) {
        todos[i].checked = false;
    }
    
}