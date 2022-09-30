const input = document.querySelector('.input');
const button = document.querySelector('.button');
const table = document.getElementById('to-do-list');

// user inputs items



// user clicks submit
button.addEventListener('click', function (){
    //displays content in table
    let userInput = input.value;
    const toDoItem = document.createElement('tr');

    toDoItem.innerHTML = `
    <td>${userInput}</td>
    <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>`;

    table.appendChild(toDoItem);

    // clear fields
    input.value = '';
})

// validate

// completely delete to do item
table.addEventListener('click', e => {
    console.log('butt');
})

// deleteToDo(el) {
//     if(el.classlist.contains('delete')) {
//         el.parentElement.parentElement.remove()
//     }
// }