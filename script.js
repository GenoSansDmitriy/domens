// Закрытие и открытие========================================
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

// Форма связи========================================
let 
  sending = document.querySelector('#btn-sv'),
  username = document.querySelector('#name'),
  tel = document.querySelector('#tel'),
  mail = document.querySelector('#mail');

  const user_send = {
    username:'',
    tel:'',
    mail:''
  }

sending.addEventListener('click', function () {
  if (username.value === '') {
    alert("Заполните поле имя")
  } else if (tel.value === '') {
    alert("Заполните поле телефона")
  } else if (mail.value === '') {
    alert("Заполните поле e-mail")
  }else{
    alert("Благодарим за заявку, скоро мы с вами свяжемся!")

    user_send.username = username.value;
    user_send.tel = tel.value;
    user_send.mail = mail.value;
    localStorage.setItem('user_send', JSON.stringify(user_send))

    username.value = ""
    tel.value = ""
    mail.value = ""
  }
})

// Форма регистрации========================================
let 
  regmail = document.querySelector('#regmail'),
  regpass = document.querySelector('#regpass'),
  regbtn = document.querySelector('#regbtn'),
  rand = Math.floor(Math.random() * 900000) + 100000;

  const user = {
    id:'',
    regmail:'',
    regpass:''
  }

  regbtn.addEventListener('click', function () {
    if (regmail.value === ""){
    }else if(regpass.value === ""){
    }else{
      user.id = rand;
      user.regmail = regmail.value;
      user.regpass = regpass.value;
      localStorage.setItem('user', JSON.stringify(user))
      regmail.value = '';
      regpass.value = '';
      document.getElementById("myForm").style.display = "none";
    }
  })

// localStorage.clear();


//Поиск ========================================
let
  searchbar = document.querySelector('#searchbar'),
  searchbtn = document.querySelector('#searchbtn');

searchbtn.addEventListener('click', function(){
  if(searchbar.value === ".ru"){
    document.getElementById("FormDom").style.display = "block";
  }else if(searchbar.value === ".com"){
    document.getElementById("FormDom1").style.display = "block";
  }else if(searchbar.value === ".net"){
    document.getElementById("FormDom2").style.display = "block";
  }else if(searchbar.value === ".org"){
    document.getElementById("FormDom3").style.display = "block";
  }else if(searchbar.value === ".online"){
    document.getElementById("FormDom4").style.display = "block";
  }else if(searchbar.value === ".shop"){
    document.getElementById("FormDom5").style.display = "block";
  }else if(searchbar.value === ".club"){
    document.getElementById("FormDom6").style.display = "block";
  }else if(searchbar.value === ".website"){
    document.getElementById("FormDom7").style.display = "block";
  }else if(searchbar.value === ".store"){
    document.getElementById("FormDom8").style.display = "block";
  }
})






