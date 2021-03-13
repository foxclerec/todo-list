var input = document.querySelector('.input');
var btn = document.querySelector('.btn');
var ul = document.querySelector('.todo-list');
var li = document.querySelector('li');



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement('li');
	var settings = document.createElement('span');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(settings);
	input.value = '';
}

function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement()
	}
}

function addListAfterKeydown(e) {
	if(inputLength() > 0 && e.keyCode === 13) {
		createListElement()
	}
}

// Done
function underlineItem(event){
	li.classList.toggle("done");
}

// Delete
function removeItem(event){
	li.remove();
}

btn.addEventListener('click', addListAfterClick);
input.addEventListener('keydown', addListAfterKeydown);
li.addEventListener('click', underlineItem);
