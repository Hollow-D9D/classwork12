import { isPrevsComplete } from "./helper/isPrevsComplete.js";

const toDoList = document.getElementById("todo")
const addBtn = document.getElementById("addBtn");
const input = document.getElementById("input");
const state = {
    todos: [
        {
            value: "Wake up at 07:00.",
            id: 0,
            isComplete: false,
        },
        {
            value: "Leave for a work at 08:30.",
            id: 1,
            isComplete: false,
        },
        {
            value: "Meeting at 11:00.",
            id: 2,
            isComplete: false,
        },
    ],
};

function render(items) {
    toDoList.innerHTML = "";

    items.forEach(item => {
        const node = document.createElement("li");
        node.innerText = item.value;

        node.classList.add("todoElem");
        if(item.isComplete) {
            node.classList.toggle("isComplete");
        }

        node.addEventListener("click", (event) => {
            if(isPrevsComplete(items.todos, item.id)){
            state.todos = state.todos.map((elem) => elem.id === item.id ? {...elem, isComplete: !elem.isComplete} : elem)
            render(state.todos)}
        })
        toDoList.appendChild(node);
    });
};

addBtn.addEventListener("click", () => {
    const value = input.value.trim();
    const id = state.todos.length;
    input.value = "";
    if (value) {
        const newItem = {value, id};
        newItem.isComplete = false;
        state.todos = [...state.todos, newItem];
        render(state.todos);
    } else {
        alert("Invalid Input");
    }
})
// while(true)
render(state.todos)