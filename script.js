const input = document.querySelector('.input');
const button = document.querySelector('.button');
const table = document.getElementById('to-do-list');

// user inputs items



// user clicks submit
button.addEventListener('click', function (){
    //displays content in table
    let userInput = input.value;
    const toDoItem = document.createElement('tr');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    toDoItem.classList.add('to-do-item');


    toDoItem.innerHTML = `
    <td>${userInput}</td>`;

    // deleteButton.innerHTML = `<td><td>`
    

    table.appendChild(toDoItem);
    toDoItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', function() {
        toDoItem.remove();
    })

    // clear fields
    input.value = '';
})

