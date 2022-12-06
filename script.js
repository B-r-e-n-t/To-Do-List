const listItemInput = document.querySelector('.list-item-input');
const addToListButton = document.querySelector('.add-to-list-button');
const table = document.getElementById('to-do-list');

// STEP 1 >>>>>> user clicks on create-a-list button
const modal = document.getElementById('modal');
const createListButton = document.querySelector('.create-a-list-button');

   // >>>>>> modal is opened when button is clicked
createListButton.addEventListener('click', function() {
    modal.style.display = 'block'
})



// Step 2 >>>>>>> user inputs title of list and clicks create list, user is taken to home page
  //  where new list is there on a card

const titleInput = document.querySelector('.title-input');
const submitListTitleButton = document.querySelector(".submit-list-title-button")

submitListTitleButton.addEventListener('click', newList)

function newList() {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    let userTitleInput = titleInput.value;

    const newTitle = document.createElement('h3');
    newTitle.innerHTML = `${userTitleInput}`;

    newCard.appendChild(newTitle);
    document.getElementById('body').appendChild(newCard)

    modal.style.display = 'none'
    titleInput.value = ''

}







// user clicks add to list, list item gets added to the list
addToListButton.addEventListener('click', function(){
    let userInput = listItemInput.value;
    const toDoItem = document.createElement('tr');
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'X'
    deleteButton.classList.add('delete-button');
    toDoItem.classList.add('to-do-item');

    //display use input in list
    toDoItem.innerHTML = `
    <td>${userInput}</td>`;

    table.appendChild(toDoItem);
    toDoItem.appendChild(deleteButton);

     // clear fields
     listItemInput.value = '';


    // delete items
     deleteButton.addEventListener('click', function() {
        toDoItem.remove();
    })

})
