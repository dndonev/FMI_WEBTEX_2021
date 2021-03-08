const body = document.body;
const ul = document.querySelector('#my-list')

function addItem() {
    const input = document.querySelector('#input')
    const li = document.createElement('li');

    li.innerText = input.value;

    ul.appendChild(li);

    input.value = '';
}

