"use strict";
document.addEventListener('DOMContentLoaded', (event) => {
    const addTodoBtn = document.getElementById('add-todo-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    if (!addTodoBtn || !todoInput || !todoList) {
        throw new Error('Could not find required elements.');
    }
    // Add event listeners to initial to-do items
    document.querySelectorAll('#todo-list li').forEach(item => {
        item.addEventListener('click', () => {
            item.remove();
        });
    });
    // Function to add a new to-do item
    const addTodo = () => {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.textContent = todoText;
            li.addEventListener('click', () => {
                if (li.parentNode) {
                    li.parentNode.removeChild(li);
                }
            });
            todoList.appendChild(li);
            todoInput.value = '';
        }
    };
    // Add a new to-do item when the button is clicked
    addTodoBtn.addEventListener('click', addTodo);
    // Add a new to-do item when the Enter key is pressed
    todoInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    });
});
