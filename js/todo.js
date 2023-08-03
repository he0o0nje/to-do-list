function plus() {
    const inputElement = document.querySelector('.input');
    const optionElement = document.querySelector('#option');
    const selectedOption = optionElement.value;

    if (inputElement.value.trim() === '') {
        alert('할 일을 입력해주세요.');
        return;
    }

    const priorityMap = {
        '1': '낮음',
        '2': '보통',
        '3': '높음',
        '4': '아주 높음',
    };

    const listItem = document.createElement('div');
    listItem.classList.add('list_item');
    listItem.innerHTML = `
        <input type="checkbox" class="check" onchange="updateStatus(this)">
        <span class="content">${inputElement.value}</span>
        <span class="priority">${priorityMap[selectedOption]}</span>
        <button class="delete_btn" onclick="removeItem(this)">삭제</button>
    `;

    const listContainer = document.querySelector('.box_list');
    listContainer.appendChild(listItem);

    inputElement.value = '';
}

function removeItem(button) {
    const listItem = button.closest('.list_item');
    listItem.remove();
}

function updateStatus(checkbox) {
    const listItem = checkbox.closest('.list_item');
    listItem.classList.toggle('completed', checkbox.checked);
}
