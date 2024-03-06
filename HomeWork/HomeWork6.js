/*- Знайти та вивести довижину настипних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool'*/

let s1 = 'hello world';
console.log(s1.length);

let s2 = 'lorem ipsum';
console.log(s2.length);

let s3 = 'javascript is cool';
console.log(s3.length);

console.log('*************************');

/*- Перевести до великого регістру наступні стрінгові значення
      'hello world', 'lorem ipsum', 'javascript is cool'*/

let up1 = s1.toUpperCase();
console.log(up1);

let up2 = s2.toUpperCase();
console.log(up2);

let up3 = s3.toUpperCase();
console.log(up3);

console.log('*************************');

/*- Перевести до нижнього регістру настипні стрінгові значення
      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/

let s4 = 'HELLO WORLD';
let down1 = s4.toLowerCase();
console.log(down1);

let s5 = 'LOREM IPSUM';
let down2 = s5.toLowerCase();
console.log(down2);

let s6 = 'JAVASCRIPT IS COOL';
let down3 = s6.toLowerCase();
console.log(down3);

console.log('*************************');

/*- Є "брудна" стрінга let str = ' dirty string   '
. Почистити її від зайвих пробілів.*/

let str = ' dirty string   ';
console.log(str.substring(1, str.length - 3));

console.log('*************************');

/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str1 = 'Ревуть воли як ясла повні';
    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/

let str1 = 'Ревуть воли як ясла повні';
let arr = str1.split(' ');
console.log(arr);

console.log('*************************');

/*- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
за допомоги map  перетворити всі об'єкти в масиві на стрінгові.*/

let arrNum = [10,8,-7,55,987,-1011,0,1050,0];
const arraynNum = arrNum.map(item => {return item.toString()});

console.log(arraynNum);

console.log('*************************');

/*- створити функцію sortNums(direction), яка прймає масив чисел,
та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]*/

let nums = [11,21,3];
let sortNums = nums.sort((first, second) => {

    /*return first - second;*/
    return second - first;
});
console.log(sortNums);


function sortNums1(arr, direction) {
    switch (direction) {
        case 'ascending' :
            return nums.sort((a, b) => a - b);
        case 'descending' :
            return nums.sort((a, b) => b - a);
        default: 'Error'
    }
}

console.log(sortNums1(nums, 'descending'));

console.log('*************************');

/*- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 -- відсортувати його за спаданням за monthDuration
 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

/*-- відсортувати його за спаданням за monthDuration*/

function sorted(arr, key) {
    switch (key) {
        case 'down':
            return arr.sort((a, b) => b.monthDuration - a.monthDuration);
        default: 'Error';
    }
}

console.log(sorted(coursesAndDurationArray, 'down'))

console.log('---------------------');

/*-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/

let f1 = coursesAndDurationArray.filter((number) => number.monthDuration > 5);
console.log(f1);

console.log('---------------------');

/*-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/

let mapC = coursesAndDurationArray.map((name, index) => {
    let n = {
        id: index,
        title: name.title,
        monthDuration: name.monthDuration
    }
    return n;

});

console.log(mapC);

console.log('*************************');

/* описати колоду карт (від 6 до туза без джокерів)
 - знайти піковий туз
 - всі шістки
 - всі червоні карти
 - всі буби
 - всі трефи від 9 та більше

{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}*/

let cards = [
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},

    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'spade', value: 7, color: 'black'},
    {cardSuit: 'spade', value: 8, color: 'black'},
    {cardSuit: 'spade', value: 9, color: 'black'},
    {cardSuit: 'spade', value: 10, color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},

    {cardSuit: 'diamond', value: 6, color: 'red'},
    {cardSuit: 'diamond', value: 7, color: 'red'},
    {cardSuit: 'diamond', value: 8, color: 'red'},
    {cardSuit: 'diamond', value: 9, color: 'red'},
    {cardSuit: 'diamond', value: 10, color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},

    {cardSuit: 'heart', value: 6, color: 'red'},
    {cardSuit: 'heart', value: 7, color: 'red'},
    {cardSuit: 'heart', value: 8, color: 'red'},
    {cardSuit: 'heart', value: 9, color: 'red'},
    {cardSuit: 'heart', value: 10, color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
];

/* - знайти піковий туз*/

let cardFil = cards.filter((card) => card.cardSuit === 'spade' && card.value === 'ace');
console.log(cardFil);

console.log('*************************');

/*- всі шістки
 - всі червоні карти
 - всі буби
 - всі трефи від 9 та більше*/

/*всі шістки*/

let cardFil1 = cards.filter((card) => card.value === 6);
console.log(cardFil1);

/* - всі червоні карти*/

let cardFil2 = cards.filter((card) => card.color === 'red');
console.log(cardFil2);

/* - всі буби*/

let cardFil3 = cards.filter((card) => card.cardSuit === 'diamond');
console.log(cardFil3);

/* - всі трефи від 9 та більше*/

let cardFil4 = cards.filter((card) => card.cardSuit === 'clubs').splice(4);
console.log(cardFil4);


/*let reduceCard = cards.reduce(
    (card, directions) => {
        if (directions.value === 6){
            card[0].push(directions);
        }
        if (directions.color === 'red'){
            card[1].push(directions);
        }
        if (directions.cardSuit === 'diamond'){
            card[2].push(directions);
        }
        if (directions.cardSuit === 'clubs' && directions.value > 9){
            card[3].push(directions);
        }
        return card;
    },
    [[],[],[],[]]
);

console.log(reduceCard[0]);
console.log(reduceCard[1]);
console.log(reduceCard[2]);
console.log(reduceCard[3]);*/

console.log('*************************');

/*Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}*/

    let reduceC = cards.reduce(
        (card, directions) => {
            if (directions.cardSuit === 'spade'){
                card[0].push(directions);
            }
            if (directions.cardSuit === 'diamond'){
                card[1].push(directions);
            }
            if (directions.cardSuit === 'heart'){
                card[2].push(directions);
            }
            if (directions.cardSuit === 'clubs'){
                card[3].push(directions);
            }
            return card;
        },

        [[],[],[],[]]
    );

console.log(reduceC[0]);
console.log(reduceC[1]);
console.log(reduceC[2]);
console.log(reduceC[3]);

console.log('*************************');

/*взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker*/


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


/*--написати пошук всіх об'єктів, в який в modules є sass
*/


let filSass = (arr) => {
    return arr.filter((modul) => modul.modules.some(item => item === 'sass'));
}
console.log(filSass(coursesArray));

/*--написати пошук всіх об'єктів, в який в modules є docker*/

let filDok = (arr) => {
    return arr.filter((modul) => modul.modules.some(item => item === 'docker'));
}
console.log(filDok(coursesArray));