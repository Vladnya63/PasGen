'use strict';
let pasField = document.getElementById("pasField");
let clock = document.getElementById("clock");
let dinamicStr = document.getElementById("dinamicString");
let button = document.getElementById("button");



function randomInt(max) {
    return Math.floor(Math.random(max) * max);
};

function getPas(len) {
    let str = '';
    let pas = '';
    let modernPas_1;
    for (let i = 100; i <= 225; i++) {  // Создаем сторку с данными для паролей (A - Z, a - z и т.д.)
        str += String.fromCodePoint(i);
    };
    for (let k = 0; k < len; k++) {  // Создаем пароль (простейший)
        pas += str[randomInt(len)];
    };

    for (let i = 0; i < 2; i ++) {
    modernPas_1 = pas.replace(pas[randomInt(pas.length)], randomInt(100)); // Добавляем цифры
    pas = modernPas_1.replace(pas[randomInt(pas.length)], pas[randomInt(pas.length)].toUpperCase()) // И большие буквы
    }
    pasField.textContent = pas;

};

function clockOn() {
    let time = new Date(); // Каждую секунду получаем актуальную дату
    let h = (time.getHours() % 12).toString(); // 12- часовой формат
    let m = time.getMinutes().toString(); // toString для строки
    let s = time.getSeconds().toString() 



    if (h.length < 2) {
        h = '0' + h;
    }

    if (m.length < 2) {
        m = '0' + m;
    }

    if (s.length < 2) {
        s = '0' + s;
    }


    let clockString = h + ':' + m + ':' + s;
    let colorString = '#' + h + m + s;  // 16- ное значение цвета

    clock.textContent = clockString; // Изменяем строку часов динамически

    document.body.style.background = colorString; // Изменяем цвет диманически каждую секунду

};
clockOn();
setInterval(clockOn, 1000);



function dynamicStr() {
    let str = '';
    let newStr = '';

    for (let i = 100; i <= 225; i++) {  // Создаем сторку с данными(A - Z, a - z и т.д.)
        str += String.fromCodePoint(i);
    };

    for(let f = 0; f < 15; f ++) {
    newStr += str[randomInt(15)]
    };

    let final = newStr.replace(newStr[randomInt(15)], str[randomInt(20)]);

    pasField.textContent = final;
    
};

dynamicStr();
let id = setInterval(dynamicStr, 100);


function stopDynamicStr() {
    clearInterval(id);
    getPas(15);
};



