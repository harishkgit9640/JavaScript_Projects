// To Do List JavaScript

let inpNewTask = $('#inpNewTask');
let ulTask = $('#ulTask');
let addBtn = $('#addTask');
let sortBtn = $('#sortTask');
let resetBtn = $('#restTask');
let delBtn = $('#clearTask');


function addItem() {
    let listItem = $('<li>', {
        'class': 'list-group-item list-group-item-primary',
        text: inpNewTask.val()
    });
    listItem.click((event) => {
        listItem.toggleClass('done');
    });
    ulTask.append(listItem)
    inpNewTask.val('');
}

function clearDone() {
    inpNewTask.val("");
    toggleReset(true);
}

function sortTask() {
    $('#ulTask .done').appendTo(ulTask);
}

function delTask() {
    $('#ulTask .done').remove();
}


function toggleReset(valEmpty) {
    if (!valEmpty) {
        resetBtn.prop('disabled', false)
        addBtn.prop('disabled', false)
    } else {
        resetBtn.prop('disabled', true)
        addBtn.prop('disabled', true)
    }
}


inpNewTask.keypress((e) => {
    if (e.which == 13) {
        addItem()
    }
});

inpNewTask.on('input', () => {
    toggleReset(inpNewTask.val() == "");
})



addBtn.click(addItem);
resetBtn.click(clearDone);
sortBtn.click(sortTask);
delBtn.click(delTask);

