// const domens = [
//   {
//     name: '.ru',
//     price: '149',
//   },
//   {
//     name: '.com',
//     price: '1020',
//   },
//   {
//     name: '.net',
//     price: '960',
//   },
//   {
//     name: '.org',
//     price: '1110',
//   },
//   {
//     name: '.online',
//     price: '280',
//   },
//   {
//     name: '.shop',
//     price: '500',
//   },
//   {
//     name: '.club',
//     price: '1470',
//   },
//   {
//     name: '.website',
//     price: '280',
//   },
//   {
//     name: '.store',
//     price: '280',
//   },
// ];

// вариант 1
// let dom = document.querySelector('#dom');
// let price = document.querySelector('#price');

// for (let i = 0; i < domens.length; i++){
//   const item = domens[i];
//   let
//     itemname = item.name,
//     itemprice = item.price;
//     dom.innerHTML = itemname;
//     price.innerHTML = `${itemprice} руб. `;
// }

// вариант 2
// var out ='';
// for(var key in domens){
//   out+=domens[key].img + '</br>';
//   out+=domens[key].name + '</br>';
//   out+=domens[key].price + '</br>';
// }
// document.querySelector('#soldatic').innerHTML = out;


// Регистрация
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Корзина
function openBasket() {
  document.getElementById("myBasket").style.display = "block";
}
function closeBasket() {
  document.getElementById("myBasket").style.display = "none";
}

// Товары
function open_dom() {
  document.getElementById("FormDom").style.display = "block";
}
function closeFormDom() {
  document.getElementById("FormDom").style.display = "none";
}

function open_dom1() {
  document.getElementById("FormDom1").style.display = "block";
}
function closeFormDom1() {
  document.getElementById("FormDom1").style.display = "none";
}

function open_dom2() {
  document.getElementById("FormDom2").style.display = "block";
}
function closeFormDom2() {
  document.getElementById("FormDom2").style.display = "none";
}

function open_dom3() {
  document.getElementById("FormDom3").style.display = "block";
}
function closeFormDom3() {
  document.getElementById("FormDom3").style.display = "none";
}

function open_dom4() {
  document.getElementById("FormDom4").style.display = "block";
}
function closeFormDom4() {
  document.getElementById("FormDom4").style.display = "none";
}

function open_dom5() {
  document.getElementById("FormDom5").style.display = "block";
}
function closeFormDom5() {
  document.getElementById("FormDom5").style.display = "none";
}

function open_dom6() {
  document.getElementById("FormDom6").style.display = "block";
}
function closeFormDom6() {
  document.getElementById("FormDom6").style.display = "none";
}

function open_dom7() {
  document.getElementById("FormDom7").style.display = "block";
}
function closeFormDom7() {
  document.getElementById("FormDom7").style.display = "none";
}

function open_dom8() {
  document.getElementById("FormDom8").style.display = "block";
}
function closeFormDom8() {
  document.getElementById("FormDom8").style.display = "none";
}

let sending = document.querySelector('#btn-sv'),
  username = document.querySelector('#name'),
  tel = document.querySelector('#tel'),
  mail = document.querySelector('#mail');
sending.addEventListener('click', function () {
  if (username.value === '') {
    alert("Заполните поле имя")
  } else if (tel.value === '') {
    alert("Заполните поле телефона")
  } else if (mail.value === '') {
    alert("Заполните поле e-mail")
  }
})



