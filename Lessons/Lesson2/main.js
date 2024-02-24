/*--------------------Масиви--------------------*/

/*let dog = {
    id: 1,
    name: 'kokos',
    breed: 'spaniel',
    age: 3
}
console.log(dog);
console.log(dog.name);
console.log(dog.age);*/




let dogMas1= [
    {id: 1,name: 'kokos', breed: 'spaniel', age: 3}, /*index 0*/
    {id: 2,name: 'ananas', breed: 'staff', age: 5},  /*index 1*/
    {id: 3,name: 'kit', breed: 'pes', age: 7},
];
/*console.log(dogMas1.length);    /!*[визначаємо довжину масива]*!/
console.log(dogMas1);
let dog1 = dogMas1[1];  /!*будь який обьєкт можна витягнути в змінну*!/
console.log(dog1);
console.log(dog1.id);
console.log(dog1.name);
console.log(dog1.age);
console.log(dog1.breed);
console.log(dog1);
console.log(dog1);*/


let dogMas2= [
    {id:11,name: 'banana', breed: 'taxa', age: 3}, /*index 0*/
    {id: 22,name: 'avokado', breed: 'pug', age: 5},  /*index 1*/
    {id: 33,name: 'popil', breed: 'dog', age: 7},
];

/*let mulltiArray = [
    dogMas1,
    dogMas2
]
console.log(mulltiArray.length);
console.log(mulltiArray);
console.log(mulltiArray[0][0]);  /!* В багато вимірному масиві [індекс масиву][індекс обьєкту  в масиві до якого хочемо звернутись ]*!/
console.log(mulltiArray[0][1]);
console.log(mulltiArray[0][2].breed); /!*Звертаємося до конкретного елемента*!/*/

let cats1= [
    {id:111,name: 'carapka', breed: 'gemini', age: 5}, /*index 0*/
    {id: 222,name: 'baton', breed: 'pers', age: 9},  /*index 1*/
];

let pets = [
    dogMas1,
    dogMas2,
    cats1
];

/*console.log(pets.length);*/
console.log(pets[0][0]);
/*console.log(pets[0][1]);
console.log(pets[0][2]);
console.log(pets[0][2].breed);*/

/*console.log(pets.length);
console.log(pets[2]);
console.log(pets[2][0]);
console.log(pets[2][0].name);*/
console.log(pets.length);
let petArrays3 = pets[2];
console.log(petArrays3);
console.log(petArrays3[0]);
console.log(petArrays3[0].name);

console.log(pets[1].length);  /*визначаємо довжину масива в масиві*/


let devs = [
    /*                       [0]    [1]    [2]*/
    {name:'vasya',skills:['html', 'js', 'java']}, /*[0]*/
    {name:'petya',skills:['html', 'js', 'node']},    /*[1]*/
    {name:'anna',skills:['html', 'js']}      /*[2]*/
];

console.log(devs);
console.log(devs[0]);  /*vasya*/
console.log(devs[0].skills[0]);  /*vasya*/
console.log(devs[0].skills[1]);  /*vasya*/
console.log(devs[0].skills[2]);  /*vasya*/
console.log(devs[0].skills[254]);  /*vasya*/

/*-----------------Об'єкти------------------*/

let obj = {};     /*Немаємо визначений об'єкт*/
console.log(obj);

obj['name']= 'kolia';      /*можемо задати будь яку характеристику і вона створиться*/
console.log(obj);
obj.name = 'frank';         /*або перевизначиться*/
console.log(obj);


/*
delete obj.name;    /!*Видаляємо характеристику об'єкта *!/
console.log(obj);
*/

/*------------Прирівнюємо елементи-------------*/

let p = 0;
let p2 = p; /*0*/
console.log(p2);

p2 = p2 + 100;  /*p2 = 0+100*/
console.log(p, p2);

let obj1 = {id:1};
let obj2 = obj1;
console.log(obj2);

obj2.name = 'gdgddgb'; /*числа, стрінги  і булові значення -- премітивні типи, при копіюванні передають значення по значенню*/
console.log(obj2);      /*присвоєне значення obj2 автоматично присвоюється obj1, це є один об'єкт в різних обгортках */

console.log(obj1);
/*Референсіальні типи*/
console.log([]);      /*Масив*/
console.log({});     /*об'єкт*/


/*-----------------Логічні оператори-----------------*/
/*Бінарні оператори для порівняння*/
/*&& - and логічний, строгий;   || - orr*/

console.log(true && true); /*true*/
console.log(true && false); /*false*/
console.log(false && false); /*false*/

console.log(true || false); /*true*/  /*Достатньо одоного значення true  і висновок в порівнянні буде true, не строга умова*/

console.log(true && true || false);  /*true . послідовність*/


/*let age = +prompt();  /!*числове значення*!/*/
let age = 100;  /*0-18  19-35  36-60*/

/*if (age < 18) {   /!*якщо менше 18*!/ /!* if може існувати без else *!/
    document.write('<h2>Hello adult user</h2>');
} else {         /!* у інших випадках*!/  /!* варіант на всяк випадок*!/
    document.write('<h2>Hello young user</h2>');
}*/

if (age > 0 && age <= 18) {
    document.write('<h2>Hello adult user</h2>');
} else if (age > 18 && age <= 35) {       /*можливість множинної перевірки*/
    document.write('<h2>Hello young user</h2>');
} else if (age > 35 && age <= 60) {
    document.write('<h2>Hello old man</h2>');
} else {
    document.write('<h2>Hello?????</h2>');
}



let user = {name: 'leon', age: 55}
if (user.age > 0 && user.age <= 18) {
    document.write('<h2>Hello adult user</h2>');
} else if (user.age > 18 && user.age <= 35) {       /*можливість множинної перевірки*/
    document.write('<h2>Hello young user</h2>');
} else if (user.age > 35 && user.age <= 60) {
    document.write('<h2>Hello old man</h2>');
} else {
    document.write('<h2>Hello?????</h2>');
}

/*------------Switch-----точечні значення-------*/

switch (user.age) {   /*не має діапазону*/
    case 18:
        console.log('young man');
        break; /*стоп виконання умови*/
    case 35:
        console.log('adult man');
        break;
    case 60:
        console.log('old man');
        break;
    default:  /*на випадок неспівпадіння*/
        console.log('?????');
}












