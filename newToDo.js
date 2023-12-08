const root = document.getElementById('root');
const h1 = document.createElement('h1');
const h1Txt = document.createTextNode('TO DO LIST');
h1.append(h1Txt);
const wrap = document.createElement('div');
const inp = document.createElement('input');
const addBtn = document.createElement('button');
let addBtnTxt = document.createTextNode('Add item');
addBtn.append(addBtnTxt);

const list = document.createElement('ul');
const wrapBut = document.createElement('div');
const savBtn = document.createElement('button'); //save
let saveBtnTxt = document.createTextNode('Save item');
savBtn.append(saveBtnTxt);
const cancelBtn = document.createElement('button'); //cancel
let cancelBtnTxt = document.createTextNode('Cancel');
cancelBtn.append(cancelBtnTxt);
wrapBut.append(savBtn, cancelBtn);
wrap.append(inp, addBtn, wrapBut);
root.append(h1, wrap, list);
h1.style.marginTop = "20px";
wrap.style.display = "flex";
wrap.style.alignItems = "center";
wrap.style.width = "600px";
inp.style.height = "30px";
inp.style.width = "75%";
addBtn.style.backgroundColor = "rgb(81, 183, 81)";
addBtn.style.height = "35px";
addBtn.style.width = "25%";
addBtn.disabled = true;
savBtn.style.backgroundColor = "rgb(81, 183, 81)";
savBtn.style.width = "50%";
cancelBtn.style.backgroundColor = "rgb(232, 101, 95)";
cancelBtn.style.width = "50%";
wrapBut.style.width = "25%";
wrapBut.style.height = "35px";
savBtn.style.height = "35px";
cancelBtn.style.height = "35px";
wrapBut.style.visibility = "hidden";
inp.style.position = "relative";
wrapBut.style.position = "absolute";

inp.addEventListener('input', () => {
    if(inp.value !== ""){
        addBtn.disabled = false;
    } else {
        addBtn.disabled = true;
    }
})

addBtn.addEventListener('click', () => {
    let value = inp.value;
    let id = Math.random() * 42.28;
    if (value){
        let transaction = {value, id}
        saveToDo(transaction);
        addToDo(transaction);
        inp.value = "";
    }
});
paintToDo();

function saveToDo(transaction){
    let transactions = JSON.parse(localStorage.getItem('toDoList')) || [];
    transactions.push(transaction);
    localStorage.setItem('toDoList', JSON.stringify(transactions));
}

function addToDo(transaction){
    list.append(transaction.value);
    location.reload();
}

function paintToDo(){
    const array = JSON.parse(localStorage.getItem('toDoList'));
    for (let i = 0; i < array.length; i++){
        let transactionElement = document.createElement('div');
        transactionElement.innerText = array[i].value;
        
        const line = document.createElement('div');
        line.setAttribute('class', 'line');
        const buttonsLine = document.createElement('div');
        const upBtn = document.createElement('button');
        const upBtnTxt = document.createTextNode('Update');
        upBtn.append(upBtnTxt);
        const delBtn = document.createElement('button');
        const delBtnTxt = document.createTextNode('Delete');
        delBtn.append(delBtnTxt);
        buttonsLine.append(upBtn,delBtn);
        line.append(transactionElement, buttonsLine);
        list.append(line);
        updateBtn(upBtn, array[i].value);
        deleteBtn(line, delBtn, array[i].id);

        line.style.backgroundColor = "white";
        line.style.display = "flex";
        line.style.justifyContent = "space-between";
        line.style.width = "320px";
        line.style.margin = "10px";
        line.style.padding = "3px";
        line.style.paddingLeft = "10px";
        line.style.alignItems = "center";
        line.style.border = "1px solid black";
        transactionElement.style.maxWidth = "190px";
        transactionElement.style.overflow = "hidden";
        buttonsLine.style.margin = "2px";
        upBtn.style.backgroundColor = "rgb(81, 183, 81)";
        delBtn.style.backgroundColor = "rgb(232, 101, 95)";
        delBtn.style.marginLeft = "2px";
        upBtn.style.border = "1px solid black";
        upBtn.style.fontSize = "18px";
        delBtn.style.border = "1px solid black";
        delBtn.style.fontSize = "18px";
    }
}

function deleteBtn(item, but, value){
    but.addEventListener('click', () => {
      let toDoLists = JSON.parse(localStorage.getItem('toDoList'));
      const newToDoLists = toDoLists.filter(obj => obj.id !== value)
      localStorage.setItem('toDoList', JSON.stringify(newToDoLists));
      item.remove();
    });
}

function updateBtn(but, item){
    but.addEventListener('click', () => {
    inp.value = item;
    saveToDoList(item);
    addBtn.style.position = "absolute";
    addBtn.style.visibility = "hidden";
    wrapBut.style.position = "relative";
    wrapBut.style.visibility = "visible";
    });
}

function saveToDoList(prevItem){
    savBtn.addEventListener('click', () => {
        let toDoLists = JSON.parse(localStorage.getItem('toDoList'));
        for (let i = 0; i < toDoLists.length; i++){
            if(toDoLists[i].value == prevItem){
                toDoLists[i].value = inp.value;
            }
        }
        localStorage.setItem('toDoList', JSON.stringify(toDoLists));
        location.reload();
        wrapBut.style.position = "absolute";
        wrapBut.style.visibility = "hidden";
        addBtn.style.position = "relative";
        addBtn.style.visibility = "visible";
    });
}

cancelBtn.addEventListener('click', () => {
    inp.value = "";
    wrapBut.style.position = "absolute";
    wrapBut.style.visibility = "hidden";
    addBtn.style.position = "relative";
    addBtn.style.visibility = "visible";
});