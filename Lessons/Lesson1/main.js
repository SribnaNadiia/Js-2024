console.log('jvjhxhvjlzb')

    /*------------Змінні------------*/

                      /*---------Ємність в яку можна зберегти інфо------*/
/*/!*declaretion*!/
var a; /!*тип змінної + ім"я*!/
/!*Присвоюємо значення (string (рядок), number (число), boolan (true/fals))*!/
/!*init*!/
a = 'djhzjk'; /!*Визначили значення *!/
a = "1254889.51646";  /!*Перевизначили значення*!/
a = true;

/!*або обєднати *!/
var b = 'fkjljhdfgj'   /!*string / boolan / number не треба прописувати, це прописує інтелідж*!/*/




/*
let a = 'okten';
console.log(a);         
a = 1216531;
console.log(a);   /!*вивести в консоль*!/
*/



let data = 'okten';     /*один раз ініціюється*/
console.log(data);
console.log(data);
console.log(data);             /*і всі наступні рази перевикористаеться*/
console.log(data);


/*
{
    Окремі  кімнати між якими за замовчуванням не має бути звязку інфо однієї не доступне для інших
}
*/

/*{
    var x = 'zxbvhzgvf';  /!*має більшу видимість, інфо доступне іншим кімнатам*!/
}

{
    let r = 'jbljhjv'     /!* не має більшу видимість*!/
}*/



/*
const c = 'bhjhjvb';    /!* константа*!/
/!*c = 'bjlbjhdfb'     *!//!*константи перевизначити не можна , вибьє  помилку *!/
*/

/*-----------------Strng------------------*/
                     /*-------Обєднюємо змінні------*/
let w1 ='\'okten\'';
let w2 = "'is'";
let w3 = '"sucks"';
let space = ' ';

let sen = w1 + ' ' + w2 + space + w3;  /* Пробіли*/
console.log(sen);

let sen2 = `${w1} ${w2} ${w3}!`;/* beckquotes під esc,  виводить все з пробілами ${інтерполяція} */
console.log(sen2);

/*-----------------------Number---------------------------------*/
let n1 = 10;
let n2 = 20;
let res1 = n1 + n2;
console.log(n1 + n2);
console.log(res1);

/*console.log(15 % 2);   кратність чисел*/

/*---------------------Bool---------------------*/

let bool1 = true; /*1*/
let bool2 = false;  /*0*/
console.log(bool1 + bool2);
console.log(10 + true);

/*----------------мішаємо змінні---------------*/

console.log(100 + 'asd');  /*Константа, якщо дія відбувається зі стрінгою то весь вираз  стає стрінгою*/
console.log(100 + 200 + 'asd');   /*  =300asd  послідовність операцій, число + число + стрінга = число стрінга */
console.log('asd' + 100 + 200);   /*  =asd100 + 200 = asd100200 послідовність операцій*/


console.log('asd' - 1);  /*nan  note a number*/
console.log('11' - 1);  /*математична операція*/
console.log('11' + 1);  /*стрінга +  число*/
console.log('11' + true);  /*стрінга +  boolean*/

console.log('asdsa' - '3133513'); /* NaN*/

/*NaN*/
console.log(typeof NaN);  /*визначаємо тип данних*/
console.log(typeof 123);
console.log(typeof '1552');
console.log(typeof true);


/*let xxx;*/
/*console.log(xxx);  /!*комірка є  а визначення в середині немає*!/*/

/*null*/
console.log(typeof null); /*вимушена бага. є комірка в якій є простір в якому нічого нема  (для майбутньої інфо)*/

/*let yyy = null;*/


/*-----------------------Конвертація-------------------------*/

/* в стрінгу*/

let numToStr = 123456 + '';
console.log(typeof numToStr, numToStr);

/* в число*/
console.log((+'123')+10);
console.log(10 + +'123');

console.log(+'12d');
console.log(parseInt('123asd123'));


/*alert('nbvkjkdfb'); /!* модальне , вспливаюче вікно*!/
confirm('gcgjfc');  /!*запитання true / false*!/


let name = prompt('enter you name');
console.log(name);  /!*модальне , вспливаюче вікно для написання інфо*!/*/

/* в boolen*/
console.log(!!'sdhfdj'); /*true*/
console.log(!!' '); /*true*/
console.log(!!''); /*false  пуста стрінга*/
console.log(!!-1000); /*true*/
/*console.log(!!null);  /!* false*!/
console.log(!!undefined); /!*false*!/*/
console.log(!!NaN); /*false*/


/*-----------Обєкти---------------*/

/*let name = 'nadiia';
let age = 22

let name2 = 'kokos';
let age2 = 31;*/

let obj1 = {
    name /*ключі*/: 'nadiia',
    age: 36
}

console.log(obj1);

let obj2 = {
    name /*ключі*/: 'kokos',
    age: 50,
    wife: {
        name: 'abrikoska',
        age: 52
    }
}

console.log(obj2.name);
console.log(obj2);
console.log(obj2.name);
console.log(obj2.wife);
console.log(obj2.wife.name);
console.log(obj2['wife']['name']);
console.log(obj2['wife'].name);


/*-----------Масиви---------------*/
                            /*        0      1            2               3         4        5*/
/*                                   -----  ----  ----------------------  ----   --------    --*/
let arr = [obj1, obj2,{name: 'vasya', age: 25},true, 'hfjhgvdfhj',[]];
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[5]);
arr[2] = {name: 'petr', age: 48521}
console.log(arr);










