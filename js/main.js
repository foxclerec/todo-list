var input = document.querySelector('.input');
var btn = document.querySelector('.btn');
var ul = document.querySelector('.todo-list');
var li = document.querySelectorAll('li');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement('li');
	
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	input.value = '';

	changeClass(li);
	removeItem(li)
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

// Change class
function changeClass(item) {
	item.addEventListener('click', function(){
        item.classList.toggle("done");
    });
}

// Remove
function removeItem(item){
	var div = document.createElement('div');
	var del = document.querySelectorAll('.delete');
	div.classList.add('delete');
	item.appendChild(div);

	div.addEventListener('click', function() {
		item.classList.add('delete-animation');
		item.remove();
	});
}

btn.addEventListener('click', addListAfterClick);
input.addEventListener('keydown', addListAfterKeydown);