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



// Step 2 >>>>>>> user inputs title of list and clicks create list, modal disappears
  //  and new list is on a card on home page

const titleInput = document.querySelector('.title-input');
const submitListTitleButton = document.querySelector(".submit-list-title-button")
// card is created
const newCard = document.createElement('div');
newCard.classList.add('card');

submitListTitleButton.addEventListener('click', newList)

function newList() {

    // title is created
    let userTitleInput = titleInput.value;
    const newTitle = document.createElement('h3');
    newTitle.innerHTML = `${userTitleInput}`;
    newTitle.classList.add('title')

    //edit button is created
    const editButton = document.createElement('button');
    editButton.innerHTML = 'view/edit';
    editButton.classList.add('edit-button')

    // append title and edit button to card, append card to body (home page)
    newCard.appendChild(newTitle);
    newCard.appendChild(editButton);
    document.getElementById('body').appendChild(newCard)

    // user input in modal and modal dissappear
    modal.style.display = 'none'
    titleInput.value = ''
}


// STEP 3 >>>>>>>>>>>> user clicks on card to edit or view, card shows up on modal and user edits list
    newCard.addEventListener('click', function() {
            document.getElementById('modal-list').style.display = 'block'
    })

// STEP 4 user saves list and modal closes  
    








// adding list items to each individual list


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
