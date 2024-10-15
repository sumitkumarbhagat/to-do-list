

document.addEventListener('DOMContentLoaded', () => { 
    const addTaskBtn = document.getElementById('addTaskBtn'); 
    const taskInput = document.getElementById('taskInput'); 
    const taskDate = document.getElementById('taskDate'); 
    const taskList = document.getElementById('taskList'); 
 
    addTaskBtn.addEventListener('click', addTask); 
 
    function addTask() { 
        const taskText = taskInput.value.trim(); 
        const dateTime = taskDate.value; 
         
        if (taskText === '' || dateTime === '') { 
            alert('Please enter both task and date/time.'); 
            return; 
        } 
         
        const taskItem = document.createElement('div'); 
        taskItem.className = 'task-item'; 
         
        const taskContent = document.createElement('span'); 
        taskContent.innerText = `${taskText} - ${new Date(dateTime).toLocaleString()}`; 
         
        const taskActions = document.createElement('div'); 
        taskActions.className = 'task-actions'; 
         
        const completeBtn = document.createElement('button'); 
        completeBtn.innerText = 'Complete'; 
        completeBtn.addEventListener('click', () => { 
            taskItem.classList.toggle('complete'); 
        }); 
         
        const editBtn = document.createElement('button'); 
        editBtn.className = 'edit'; 
        editBtn.innerText = 'Edit'; 
        editBtn.addEventListener('click', () => { 
            const newText = prompt('Edit task:', taskText); 
            const newDate = prompt('Edit date/time:', new Date(dateTime).toISOString().slice(0,16)); 
            if (newText && newDate) { 
                taskContent.innerText = `${newText} - ${new Date(newDate).toLocaleString()}`; 
                taskInput.value = newText; 
                taskDate.value = newDate; 
            } 
        }); 
         
        const deleteBtn = document.createElement('button'); 
        deleteBtn.className = 'delete'; 
        deleteBtn.innerText = 'Delete'; 
        deleteBtn.addEventListener('click', () => { 
            taskList.removeChild(taskItem); 
        }); 
         
        taskActions.appendChild(completeBtn); 
        taskActions.appendChild(editBtn); 
        taskActions.appendChild(deleteBtn); 
         
        taskItem.appendChild(taskContent); 
        taskItem.appendChild(taskActions); 
         
        taskList.appendChild(taskItem); 
         
        taskInput.value = ''; 
        taskDate.value = ''; 
    } 
});
