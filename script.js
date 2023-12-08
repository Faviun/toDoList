// localStorage.setItem('cart', 'product1');
// sessionStorage.setItem('cart', 'product1');
// localStorage.removeItem('cart');
// sessionStorage.removeItem('cart');
// let tmp = localStorage.getItem('cart');
// tmp = tmp + " " + 'product2';
// localStorage.setItem('cart', tmp);
// console.log(localStorage.getItem('cart'));
// console.log(sessionStorage.getItem('cart'));
// localStorage.clear;
// sessionStorage.clear;

// let parametrs = [{key: 'value2432'}];

// if(true){
//     localStorage.setItem('parametrs', JSON.stringify(parametrs));
//     console.log('work')
// } else {
//     localStorage.setItem('parametrs', 'value');
//     console.log("qwe");
// }
// console.log(JSON.parse(localStorage.getItem('parametrs')));

const str = '[{"key": "value"}]';
console.log(typeof(JSON.parse(str)));

