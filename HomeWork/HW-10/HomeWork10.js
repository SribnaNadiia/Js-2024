/*Стоврити форму з трьома полями для name,sruname,age та кнопкою.
При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом*/

let nameEx1 = exe1.name;
console.log(nameEx1);
/*nameEx1.value = 'nadiia'*/

let surname1 = exe1.surname;
console.log(surname1);

let age1 = exe1.age;
console.log(age1);

let div1 = document.getElementById('div1');
let nameH = document.getElementById('id1');
let surnameH = document.getElementById('id2');
let ageH = document.getElementById('id3');

div1.append(nameH, surnameH, ageH);

nameEx1.oninput = function () {
    /*console.log('xxx');*/
    nameH.innerText = this.value;
}

surname1.oninput = function () {
   /* console.log('xxx');*/
    surnameH.innerText = this.value;
}

age1.oninput = function () {
    /*console.log('xxx');*/
    ageH.innerText = this.value;
}

/*div2.innerHTML = storage;
storage += 1;
localStorage.setItem('number', JSON.stringify(storage));*/



/*є сторінка, на якій є блок,
в якому знаходиьтся цифра.
написати код, який при кожному перезавантажені сторінки буде
додавати до неї +1*/

let div2 = document.getElementById('exe2');
let h1 = document.getElementById('exeh1');

div2.appendChild(h1);

let storage = JSON.parse(localStorage.getItem('number')) || 0;

function localStr() {

    storage += 1;
    localStorage.setItem('number', JSON.stringify(storage));

    h1.innerText = storage;

}

localStr();




/*Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
в масив sessions зберігається інформація про дату та час відвідування сторінки.
Є ще сторінка sessions.html (назва довільна),
при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію*/


