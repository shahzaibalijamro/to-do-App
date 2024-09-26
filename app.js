let todo = [];
let input = document.querySelector('.input');
let div = document.querySelector('.main');
const form = document.querySelector('#form');
form.addEventListener('submit',(sggssg)=>{
    sggssg.preventDefault();
    addTodo();
    todo = [];
})
function printTodo() {
    todo.map((item,index)=>{
        div.innerHTML += `
        <div class="list">
            <h2 class="main-head">${item}</h2>
            <div class="icons">
                <div onclick="editTodo(${index})">
                    <i class="fa-solid fa-1 fa-pen-to-square"></i>
                </div>
                <div onclick="deleteTodo(${index})">
                    <i class="fa-solid fa-2 fa-trash"></i>
                </div>
            </div>
        </div>
        `
        ;
    })
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
    let edited = prompt('enter updated value', todo[index]);
    todo.splice(index, 1, edited);
    printTodo();
}