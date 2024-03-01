function hfFn(color = 'blue', num = 1) {
    document.write(`<hr style="border: ${num}px ${color} solid">`)
}

/*
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/
function rectanglS(a, b) {
    return a * b
}
let s1 = rectanglS(8, 15);
console.log(s1);

/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/

function circleS(p, r) {
    return p * (r ** 2)
}
 let s2 = circleS(Math.PI, 3)
console.log(s2);

/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/

 function cylinder(p, h, r) {
     return (2 * p * r) * (h + r)
 }

 let s3 = cylinder(Math.PI, 10, 8)
console.log(s3);

/*- створити функцію яка приймає масив та виводить кожен його елемент*/

let carte = [
    {starters:'Окрошка', salads:'Цезар', desserts:'Наполеон'},
    {starters:'Борщ', salads:'Олів`є', desserts:'Київський'},
    {starters:'Солянка', salads:'Крабовий', desserts:'Медовик'},
];
function menu(product) {
    for (const productElement of product) {
        document.write(
          `<div>
                <h2>
                    ${productElement.starters}, 
                    ${productElement.salads},
                    ${productElement.desserts}
                </h2>
           </div>`
        );
    }

}
menu(carte);
hfFn();
/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/

function textFn(text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.') {
    document.write(`<p>${text}</p>`)
}
textFn();
hfFn();
/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/

function lorem(text = 'Lorem ipsum dolor sit amet.'){
    document.write(`<ul>`)
    for (let i = 0; i < text.length; i++) {
        const textElement = text[i];

    } {
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}

lorem();
hfFn();
/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/

function loremIpsum (text = 'Lorem ipsum dolor sit amet.', count = 7){

    for (let i = 0; i < count; i++) {
        const textElement = text[i];
        document.write(`<ul>`)
        document.write(`<li>${text}</li>`);
        document.write(`</ul>`)
    }
}

loremIpsum();
hfFn();

/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/

let fruts = [
    {frut: 'Banana', color: 'yellow', price: 15},
    {frut: 'Ananas', color: 'yellow-brown', price: 16},
    {frut: 'Kokos', color: 'brown-white', price: 17},
    {frut: 'Strowbarry', color: 'red', price: 18},
];

function frut(frut1) {

    for (const frut1 of fruts) {
        document.write(`<ul>`)
        for (const key in frut1) {
            document.write(`<li>${key} - ${frut1[key]}</li>`)
        }
        document.write(`</ul>`)
    }

}

frut();
hfFn();

/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/

let dogMas= [
    {id: 1,name: 'kokos', age: 3},
    {id: 2,name: 'ananas', age: 5},
    {id: 3,name: 'kit', age: 7},
];

function dog(id, name, age) {
    for (const dogMa of dogMas) {
        document.write(
            `<div class="block">
                <h2>
                    ${dogMa.id},
                    ${dogMa.name},
                    ${dogMa.age}
                </h2>
         </div>`
        );
    }
    
}
dog();
hfFn();
/*function dog(dogs, count = 1) {
    for (const dogElement of dogMas) {
        document.write(`<div>`)
        for (const key in dogElement) {
           document.write(`<h2>
               ${dogElement.id},
               ${dogElement.name},
               ${dogElement.age}
           </h2>`)
        }
        document.write(`</div>`)

    }

}*/

/*- створити функцію яка повертає найменьше число з масиву*/

function minMax() {
    let min = arguments[0];
    let max = arguments[0];
    for (const max1 of arguments) {
        if (max1 < min){
            min = max1;
        } else if (max1 > max){
            max = max1;
        }
    }
    console.log('Max ', max)
    return min;
}
let res = minMax(18, 22, 54, 33, 87, 42)

/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*/
let arr = [11, 24, 37, 5];

function result(block) {
    let sum = 0;
    for (let i = 0; i < block.length; i++) {
        sum += block[i];
    }
    console.log(sum);
}

result(arr);

/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/

/*let array = [11, 22, 33, 44];
let index1 = ['cat', 'dog', 'bird'];
let index2 = [d, b, c, j];
function swap(numb) {
        [array[1], array[3]] = [array[3], array[1]];
        console.log(array);

        [index1[0], index1[2]] = [index1[2], index1[0]];
        console.log(index1);

        [index2[1], index2[3]] = [index2[3], index2[1]];
        console.log(index2)

}
swap(array);*/

function swap(arr, index1, index2) {
    let array = [11, 22, 33, 44];


    [array[1], array[3]] = [array[3], array[1]];
    console.log(array);
    console.log(index1);
    console.log(index2)

}
swap(arr, 0, 1);


/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/

function exchange(sumOfUsd) {
    let usd = sumOfUsd / 40
    return usd
}

let res1 = exchange(10000);
console.log(res1);

function exchange1(sumOfEur) {
    let eur = sumOfEur / 42
    return eur
}
let res2 = exchange1(10000);
console.log(res2);





























