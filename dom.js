// TRAVERSING THE DOM
const listItem = document.querySelector('#items');

// parentNode
//console.log(listItem.parentNode);
// listItem.parentNode.style.backgroundColor = '#f4f4f4';

// PARENTELEMENT
// console.log(listItem.parentElement);
// listItem.parentElement.style.backgroundColor = '#f4f4f4';

// CHILDNODE
//console.log(listItem.childNodes);
// childnodes included line break (text) with the tags.

// CHIRLDREN
// console.log(listItem.children);
// console.log(listItem.children[1]);
// listItem.children[1].textContent = 'Hello';

//FIRSTCHILD
//console.log(listItem.firstChild); //#text
//FIRSTELEMENTCHILD
//console.log(listItem.firstElementChild); // gives first list item

//LASTCHILD
// console.log(listItem.lastChild); // #text
// console.log(listItem.lastElementChild);

//NEXTSIBLING & NEXTELEMNTSIBLING 
// console.log(listItem.nextSibling);
// console.log(listItem.nextElementSibling);

// previoussibling & previouselementsibling
// console.log(listItem.previousSibling);
// console.log(listItem.previousElementSibling);

// creatwe element
const newDiv = document.createElement('div');
 
//adding claas name in newdiv
newDiv.className = 'hello';

//adding id
newDiv.id = 'hello1';

// adding attribute
newDiv.setAttribute('title', 'Hello Div');

// create text node
const newDivText = document.createTextNode('HEllo');

//add text to div
newDiv.appendChild(newDivText);

// console.log(newDiv);

//choose the place for the newDiv
const container = document.querySelector('header .container'); 
const h1 = document.querySelector('header h1');

newDiv.style.fontSize = '30px';
// inserting the newDiv above the item lister
container.insertBefore(newDiv,h1);

// creating a div
const newDiv1 = document.createElement('div');


newDiv1.className = 'HEllo';

newDiv1.id = 'HEllo1';

const newDiv1Text = document.createTextNode('HEllo');

newDiv1.appendChild(newDiv1Text);

const st = document.querySelector('div .list-group');
const lt = document.querySelector('div li');

newDiv1.style.color = 'red';
st.insertBefore(newDiv1,lt);

console.log(newDiv1);


