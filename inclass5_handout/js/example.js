var list = document.querySelector('ul'); // provides access to ul items
// ADD NEW ITEM TO END OF LIST
var newListItem1 = document.createElement('li');
newListItem1.textContent = 'cream';
list.appendChild(newListItem1);


// ADD NEW ITEM START OF LIST
var newListItem2 = document.createElement('li');
newListItem2.textContent = 'kale';
list.insertBefore(newListItem2, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.querySelectorAll('li');
listItems.forEach(function (item) {
  item.classList.add('cool');
});

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');
var itemCount = listItems.length;
var itemCountSpan = document.createElement('span');
itemCountSpan.textContent = itemCount;
heading.appendChild(itemCountSpan);