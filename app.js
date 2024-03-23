let todo = [];
let input = document.querySelector('.input');
let div = document.querySelector('.main');
function printTodo() {
    div.innerHTML = '';
    for (let i = 0; i < todo.length; i++) {
        div.innerHTML += `
        <div class="list">
            <h2 class="main-head">${todo[i]}</h2>
            <div class="icons">
                <div onclick="editTodo(${i})">
                    <i class="fa-solid fa-1 fa-pen-to-square"></i>
                </div>
                <div onclick="deleteTodo(${i})">
                    <i class="fa-solid fa-2 fa-trash"></i>
                </div>
            </div>
        </div>
        `
        ;
    }
}
function addTodo() {
    todo.push(input.value);
    input.value = '';
    printTodo();
}
function deleteTodo(index) {
    todo.splice(index, 1);
    printTodo();
}
function editTodo(index) {
    let edited = prompt('enter updated value');
    todo.splice(index, 1, edited);
    printTodo();
}