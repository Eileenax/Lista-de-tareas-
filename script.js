// Esperamos a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Función para agregar
    function addTask() {
        const text = input.value.trim();
        
        if (text === "") {
            alert("Escribe tu tarea ✨");
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${text}</span>
            <div class="actions">
                <button class="btn-edit">Editar</button>
                <button class="btn-delete">Borrar</button>
            </div>
        `;

        todoList.appendChild(li);
        input.value = "";
        input.focus();
    }

    // Escuchar el clic del botón
    addBtn.addEventListener('click', addTask);

    // Escuchar la tecla Enter
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Delegación de eventos para Editar y Borrar
    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-delete')) {
            e.target.closest('li').remove();
        }

        if (e.target.classList.contains('btn-edit')) {
            const span = e.target.closest('li').querySelector('.task-text');
            const nuevoTexto = prompt("Edita tu tarea:", span.innerText);
            if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
                span.innerText = nuevoTexto;
            }
        }
    });
});