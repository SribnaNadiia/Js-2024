/*function hfFn(color = 'blue', num = 1) {
    document.write(`<hr style="border: ${num}px ${color} solid">`)
}

/!*
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*!/
    function rectanglS(a, b) {
        return a * b
    }
    let s1 = rectanglS(8, 15);
    console.log(s1);

                        /!*АБО*!/

    const rectanglS1 = (a, b) => a * b
    console.log(rectanglS1(8, 15));

/!*- створити функцію яка обчислює та повертає площу кола з радіусом r*!/

    function circleS(p, r) {
        return p * (r ** 2)
    }
     let s2 = circleS(Math.PI, 3)
    console.log(s2);

                                /!*АБО*!/

    const circleS1 = (p, r) => p * (r ** 2)
    console.log(circleS1(Math.PI, 3));


/!*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*!/

     function cylinder(p, h, r) {
         return (2 * p * r) * (h + r)
     }

     let s3 = cylinder(Math.PI, 10, 8)
    console.log(s3);

                        /!*АБО*!/

const cylinderS1 = (p, h, r) => (2 * p * r) * (h + r)
console.log(cylinderS1(Math.PI, 10, 8));

/!*- створити функцію яка приймає масив та виводить кожен його елемент*!/

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
/!*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*!/

    function textFn(text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.') {
        document.write(`<p>${text}</p>`)
    }
    textFn();
hfFn('green', 0.5);

                                         /!*АБО*!/

    const lor1 = text => text
        document.write(lor1('Lorem ipsum dolor sit amet.'))

    hfFn();
/!*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*!/

    function lorem(text = 'Lorem ipsum dolor sit amet.'){
        document.write(`<ul>`)
        for (let i = 0; i < text.length; i++) {


        } {
            document.write(`<li>${text}</li>`);
            document.write(`<li>${text}</li>`);
            document.write(`<li>${text}</li>`);
        }
        document.write(`</ul>`)
    }

    lorem();
    hfFn();
/!*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*!/

    function loremIpsum (text = 'Lorem ipsum dolor sit amet.', count = 7){

        for (let i = 0; i < count; i++) {
            document.write(`<ul>`)
            document.write(`<li>${text}</li>`);
            document.write(`</ul>`)
        }
    }

    loremIpsum();
    hfFn();

/!*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*!/

    let fruts = [
        {frut: 'Banana', color: 'yellow', price: 15},
        {frut: 'Ananas', color: 'yellow-brown', price: 16},
        {frut: 'Kokos', color: 'brown-white', price: 17},
        {frut: 'Strowbarry', color: 'red', price: 18},
    ];

    function frut(/!*frut1*!/) {

        for (const frut1 of fruts) {
            document.write(`<ul>`)
            for (const key in frut1) {
                document.write(`<li>${key} - ${frut1[key]}</li>`)
            }
            document.write(`</ul>`)
        }

    }

    frut();

    hfFn('green', 0.5);
                        /!*Aбо*!/

    let obj1 = {
        name: 'Malina',
        price: 100,
        color: 'pink',
        fruti: ()=> {
            document.write(`<ul>`);
                document.write(`<li>Frut - ${obj1.name}</li>`);
                document.write(`<li>Price - ${obj1.price}</li>`);
                document.write(`<li>Color - ${obj1.color}</li>`);
            document.write(`</ul>`);
        }
    }
    obj1.fruti();

    let obj2 = {
        name: 'Avocado',
        price: 70,
        color: 'green',
        fruti2: ()=> {
            document.write(`<ul>`);
            document.write(`<li>Frut - ${obj2.name}</li>`);
            document.write(`<li>Price - ${obj2.price}</li>`);
            document.write(`<li>Color - ${obj2.color}</li>`);
            document.write(`</ul>`);
        }
    }
    obj2.fruti2();


    let obj3 = {
        name: 'Orange',
        price: 45,
        color: 'orange',
        fruti3: ()=> {
            document.write(`<ul>`);
            document.write(`<li>Frut - ${obj3.name}</li>`);
            document.write(`<li>Price - ${obj3.price}</li>`);
            document.write(`<li>Color - ${obj3.color}</li>`);
            document.write(`</ul>`);
        }
    }
    obj3.fruti3();

    hfFn();

/!*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*!/

    let dogMas= [
        {id: 1,name: 'kokos', age: 3},
        {id: 2,name: 'ananas', age: 5},
        {id: 3,name: 'kit', age: 7},
    ];

    function dog(/!*id, name, age*!/) {
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

                                        /!*АБО*!/
    hfFn('green', 0.5);

    let objD = {
        id: 1,
        name: 'Plombir',
        age: 5,
        dog1: ()=> {
            document.write(`<div class="block">
                                <h2>
                                ${objD.id}
                                ${objD.name}
                                ${objD.age}
                                </h2>
                             </div>`);
        }
    }
    objD.dog1();

    hfFn();
/!*function dog(dogs, count = 1) {
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

}*!/

/!*- створити функцію яка повертає найменьше число з масиву*!/

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

/!*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*!/
    let arr = [11, 24, 37, 5];

    function result(block) {
        let sum = 0;
        for (let i = 0; i < block.length; i++) {
            sum += block[i];
        }
        console.log(sum);
    }

    result(arr);

/!*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*!/

/!*let array = [11, 22, 33, 44];
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
swap(array);*!/

    function swap(arr, index1, index2) {
        let array = [11, 22, 33, 44];


        [array[1], array[3]] = [array[3], array[1]];
        console.log(array);
        console.log(index1);
        console.log(index2)

    }
    swap(arr, 0, 1);*/


/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/

/*    function exchange(sumOfUsd) {
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

                            /!*АБО*!/

let objU = {
    currency:'USD',
    value:40,
    exchangeU: function (uah) {
        console.log(uah / this.value);
    }
}
objU.exchangeU(10000);



let objE = {
    currency:'EUR',
    value:42,
    exchangeE: function (uah) {
        console.log(uah / this.value);
    }
}
objE.exchangeE(10000);

                                    /!*АБО*!/

const usd1 = (usd, uah) => (uah / usd)
console.log(usd1(40, 10000));

const eur1 = (eur, uah) => (uah / eur)
console.log(eur1(42, 10000));*/


let moneys = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42},
];
function change(sumUAH, valut) {

    for (const moneyElement of moneys) {
        /*console.log(moneyElement);*/
        if (moneyElement.currency === valut) {
            console.log(sumUAH / moneyElement.value)
        }

    }
  }

change(10000, 'EUR' );

/*/!*АБО*!/*/

let money = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42},
];

function change2(arr, sumUAH, currency) {

    for (const moneyElement of money) {
        if (moneyElement.currency === currency){
            console.log(sumUAH / moneyElement.value)
        }
    }
}
change2(money, 10000, 'USD');













