let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: true},
    {name: 'andrey', age: 29, status: false},
    {name: 'max', age: 31, status: true},
];

/*console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);*/

/*Abo*/

/* For  of (iter)*/


/*Буде побудований по останньому*/
/*     місце в яке
       по черзі
       попадаюьт обьекти
       з масиву        masiv      */
/*for (let user of users) {

    if (user.age < 30) {
        console.log(user);    /!*user - Змінна. підмінна*!/
        /!*user.asd = 'qwe';  можемо додати нове значення тому що це ссилочний тип данних *!/
    }

    /!*users - надае обьєкт в user
    * user - виводить  обьект в консоль і повертаеться в  for
    * for - запускае цикл далі
    *  і дія продовжується до останнього обьєкта
    * потім виконується дальша дія по скрипту    *!/
}
console.log(users);*/

/* робота з обьєктом в циклі така ж сама як і без нього*/

/*console.log(users);*/  /*до users звернутися буде неможливо*/ /*Скоуп*/


/* For (itar)*/ /*можемо мотати діапазони*/
/*(;;)  - бескінечний цикл*/
/*debugger;*/  /*пошагово виконує дії*/
/*for (let i /!*index*!/ = 0; i < 4; i++) {
    console.log(i);
}*/

/*for (let i = 0; i < 4; i++) {
    const user = users[i];              /!*З першого по 4*!/
    console.log(user);
}*/

/*for (let i = 5; i < users.length -1; i++) {   /!*довжина масиву -1,  виведуться всі з 5 і окрім останнього*!/
    const user = users[i];
    console.log(user);
}*/

/*for (let i = 5; i < users.length -1; i+5) {   /!*i++ - кожен обьєкт, i+2 - (через 1)  кожен третій *!/
    const user = users[i];
    console.log(user);
}*/

/*i++  - инкременти - збільшення 'i' на 1*/
/* =0; i < 4   (0-3) - діапазон циклу*/

/*Цикли в зворотньому напрямку*/

/* ritar  - R-реверс*/

/*10 -> 0*/
/*
for (let i = users.length - 1; i >= 0; i--) {  /!*змінна і доступна тільки в середині циклу*!/
    const user = users[i];
    console.log(user);                                             /!*scope  з let  має межі видимості   *!/
}

for (var i = users.length - 1; i >= 0; i--) {        /!*З var змінна і доступна за межами циклу*!/
    const user = users[i];
    console.log(user);                                          /!*scope  з var   HEмає межі видимості   *!/
}
console.log(i); /!*тому що декрементує  0 в мінус*!/*/


/*for (const user of users) {
    /!*Константи не мають елементів перевизначення і з ними в данному випадку легше працювати *!/
}*/


// itEr  for of
// itAr for

/*let vasya = {
    0: 'asd',
    1: 123              /!*Псевдо масив*!/
};*/

/*let vasya = {
    name: 'asd',
    age: 200,
    status: true,
    asd: 'fgxd'
};*/

/*console.log(vasya);

for (let k in vasya)   { /!*k - key місце в яке будуть попадати ключі name , age ...*!/
    console.log(k);  /!* звертаємось до назви ключа*!/
    console.log(k, vasya[k]);  /!* звертаємось до Значення ключа*!/
};*/

/*1 key = name
1 key = age
1 key = status*/


let matrix = [
    [1, 2, 3],
    [11, 12, 15, 58 ],
    [148, 1256]
]

for (const itemUpperLayer of matrix) {       /*Виводиться масив і кожне його значення*/
    console.log(itemUpperLayer);
    for (const item of itemUpperLayer) {
        console.log(item);
    }
}


/*Поганий приклад*/

/*let matrix1 = [
    [1, 2, 3],
    {name: 'vasya1'},
    {name: 'vasya2'},
    [11, 12, 15, 58 ],
    {name: 'vasya3'},
    [148, 1256],
    {name: 'vasya4'},
]

for (const outerItem of matrix1) {
    console.log(outerItem);
    if (Array.isArray(outerItem)) {
        for (const item of outerItem) {
            console.log(item);
        }
    } else if (!Array.isArray(outerItem)) {
        for (const outerItemKey in outerItem) {
            console.log(outerItemKey, outerItem[outerItemKey]);
        }
    }
}*/

/*  ---------------------------- WHILE------------------------------*/

let i = 0;
while (i < users.length - 1) {    /* Змінна і лежить в загальному scoup*/
    console.log(users[i]);
    i++;
}

/*--------------------Abo--------------*/

    for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

do{                             
    console.log('shdbfjbg');
} while (false)


/*
    for -загальна ітерація,
for of - ітерація для масиву,
for in - ітерація для обʼєкту*/

