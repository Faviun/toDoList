const root = document.getElementById('root');
let listItems = [];
const h1 = document.createElement('h1');
const h1Txt = document.createTextNode('TO DO LIST');
const wrap = document.createElement('div');
const inp = document.createElement('input');
const btn = document.createElement('button');
let btnTxt = document.createTextNode('Add item');
const list = document.createElement('ul');
const wrapBut = document.createElement('div');
const btn1 = document.createElement('button'); //save
let btnTxt1 = document.createTextNode('Save item');
const btn2 = document.createElement('button'); //cancel
let btnTxt2 = document.createTextNode('Cancel');
wrapBut.style.visibility='hidden';
btn.style.position = 'relative';
wrap.style.display = 'flex-box';
wrap.style.width = '700px';
wrap.style.margin = '0 auto';
// wrapBut.style.position = 'absolute';
let tmp1 = "";

h1.append(h1Txt);
wrapBut.append(btn1, btn2);
wrap.append(inp, btn, wrapBut);
btn.append(btnTxt);
btn1.append(btnTxt1);
btn2.append(btnTxt2);
root.append(h1, wrap, list);

// Проверка инпута
btn.disabled = true;
inp.addEventListener('input', () => {
    if(inp.value !== ""){
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
})
createToDOList();


btn.onclick = function(transaction){ //Добавить
    let value = inp.value;
    let id = Math.random() * 42.28;
    if (value){
        let transaction = {value, id}
    }   
    const li = document.createElement('li');
    const txt = document.createTextNode(value);
    li.append(txt);
    list.append(li);
    const array = JSON.parse(localStorage.getItem('todolist'));
    array.push(transaction);
    value = "";
    btn.disabled = true;
    const line = document.createElement('div');
    line.setAttribute('class', 'line');
    const btnE = document.createElement('button');
    const btnETxt = document.createTextNode('Edit');
    btnE.append(btnETxt);
    const btnD = document.createElement('button');
    const btnDTxt = document.createTextNode('Delete');
    btnD.append(btnDTxt);
    line.append(li, btnE, btnD);
    list.append(line)
    console.log(transaction);
    // delBtn(line, btnD, transaction);
    // edBtn(value, btnE);
    // saveBtn(array, tmp1);
    localStorage.setItem('todolist', JSON.stringify(array));
}


function createToDOList(transaction){
    if(localStorage.getItem('todolist')){
        listItems = JSON.parse(localStorage.getItem('todolist'));
        listItems.map(item => {
            const li = document.createElement('li');
            const txt = document.createTextNode(item);
            const line = document.createElement('div');
            line.setAttribute('class', 'line');
            const btnE = document.createElement('button');
            const btnETxt = document.createTextNode('Edit');
            btnE.append(btnETxt);
            const btnD = document.createElement('button');
            const btnDTxt = document.createTextNode('Delete');
            btnD.append(btnDTxt);
            li.append(txt);
            line.append(li, btnE, btnD);
            list.append(line);
            delBtn(line, btnD, item, transaction);
            edBtn(item, btnE);
            saveBtn(listItems, item);
        });
    } else {
        localStorage.setItem('todolist', JSON.stringify(listItems));
    }
}
//редактирование текущего элемента и удаление, сохранение

function delBtn(item, but, value){
    but.addEventListener('click', () => {
        let transactions = JSON.parse(localStorage.getItem('todolist'));
        const newList = transactions.filter(obj => obj !== value)
        localStorage.setItem('todolist', JSON.stringify(newList));
        item.remove();
    })
};

function edBtn(item, but){
    but.addEventListener('click', () => {
        inp.value = item;
        tmp1 = item;
        btn.style.visibility='hidden';
        btn.style.position ='absolute';
        wrapBut.style.visibility='visible';
    })
};
function saveBtn(items, item){
    btn1.addEventListener('click', () => {
        // item = inp.value;
        // console.log(items.indexOf(tmp))
        items[items.indexOf(tmp1)] = inp.value;
        localStorage.setItem('todolist', JSON.stringify(items));
        // console.log(items)
        console.log(items[items.indexOf(tmp1)]);
        wrapBut.style.visibility='hidden';
        btn.style.position ='relative';
        btn.style.visibility='visible';
    })
}
