const form = document.getElementById('addForm');
const ItemList = document.getElementById('items');

// form submit event

form.addEventListener('submit', addItem);

// Add Item
function addItem(e){
    e.preventDefault();
    
    // create new item for the input 
    const newItem = document.getElementById('item');

    // ceate new li 
    const li = document.createElement('li');

    // add class to li
    li.className = 'list-group-item';
    
    // append the newitem to li
    li.appendChild(document.createTextNode(newItem.value));

    //append the li into ItemList
    ItemList.appendChild(li);

    // create a delete button
    const delbtn = document.createElement('button');
    // add class to the button
    delbtn.className = 'btn btn-danger btn-sm float-right delete';
    //add text to the buttton
    delbtn.appendChild(document.createTextNode('X'));
    // add delbtn to the list
    li.appendChild(delbtn);
    ItemList.appendChild(li);

    // create a edit button
    const editbtn = document.createElement('button');
    editbtn.className = 'btn btn-primary btn-sm float-right';
    editbtn.appendChild(document.createTextNode('E'));
    li.appendChild(editbtn);
    ItemList.ariaHasPopup(li);
}

// craete a remove function 
ItemList.addEventListener('click' , removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
       if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        ItemList.removeChild(li);
       }
    }
}