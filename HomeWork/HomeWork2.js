/*-----------------1.1-Масиви та об'єкти:----------------*/
 let auto = [
     {id:1, brand: 'Mercedes', year: 2009, price: '10000$'},
     {id:2, brand: 'Bmw', year: 2012, price: '9000$'},
     {id:3, brand: 'Peugeot', year: 2005, price: '5000$'},
     {id:4, brand: 'Volovo', year: 2021, price: '60000$'},
     {id:5, brand: 'Toyota', year: 2005, price: '7000$'},
     {id:6, brand: 'Skoda', year: 2018, price: '9000$'},
     {id:7, brand: 'Skoda', year: 2018, price: '9000$'},
     {id:8, brand: 'Opel', year: 2011, price: '6000$'},
     {id:9, brand: 'Lincoln', year: 2022, price: '80000$'},
     {id:10, brand: 'Maybach', year: 2023, price: '100000$'}
 ];
console.log(auto[0]);
console.log(auto[1]);
console.log(auto[2]);
console.log(auto[3]);
console.log(auto[4]);
console.log(auto[5]);
console.log(auto[6]);
console.log(auto[7]);
console.log(auto[8]);
console.log(auto[9]);

/*-----------------1.2-----------------*/

let books = [
    {title: 'Snow White', pageCount: 500, genre: 'Fairy tale'},
    {title: 'The Da Vinci Code', pageCount: 750, genre: 'Detective'},
    {title: 'Harry Poter', pageCount: 1000, genre: 'Fantasy'}
];
console.log(books);
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

/*-----------------1.3-----------------*/

let FairyTale = [
    {id:1, title: 'Hansel and Gretel', pageCount: 800, genre: 'Fairy tale', author:['The Brothers Grimm' , '1768-1863']},
    {id:2, title: 'Cinderella', pageCount: 500, genre: 'Fairy tale', author:['Charles Perrault' , '1628-1703']},
    {id:3, title: 'The Snow Queen', pageCount: 600, genre: 'Fairy tale', author:['Hans Christian Andersen' , '1805-1875']}
];
console.log(FairyTale);
console.log(FairyTale[0]);
console.log(FairyTale[0].author[0]);
console.log(FairyTale[0].author[1]);

console.log(FairyTale[1]);
console.log(FairyTale[1].author[0]);
console.log(FairyTale[1].author[1]);

console.log(FairyTale[2]);
console.log(FairyTale[2].author[0]);
console.log(FairyTale[2].author[1]);

/*-----------------1.4-----------------*/

let users = [
    {id:1, name: 'Nadiia', username: 'nsribna', password: 'le30mon'},
    {id:2, name: 'Ihor', username: 'ihmalyni', password: 'pepp&r'},
    {id:3, name: 'Tomash', username: 'tom', password: 'jear1'},
    {id:4, name: 'Marina', username: 'meri', password: 'grape81'},
    {id:5, name: 'Olga', username: 'olia', password: 'pr1nc&ss'},
    {id:6, name: 'Alex', username: 'sasha', password: 'li0n'},
    {id:7, name: 'Oleg', username: 'olezha', password: '125876'},
    {id:8, name: 'Max', username: 'maxim', password: 'max59'},
    {id:9, name: 'Semion', username: 'sioma', password: 'sem547'},
    {id:10, name: 'Vitalik', username: 'vetal', password: 'bos62'},
];
console.log(users);
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

/*-----------------2.1-Логічні розгалуження:----------------*/

let x = 5;
let a = 1;
let b = 0;
let c = -3;
console.log(x, a, b, c);

if (x != 0){
    console.log('Вірно');
} else {
    console.log('Невірно');
}

if (x < a){
    console.log('Вірно');
} else {
    console.log('Невірно');
}

if (x > b){
    console.log('Вірно');
} else {
    console.log('Невірно');
}

if (x > c){
    console.log('Вірно');
} else {
    console.log('Невірно');
}

/*-----------------2.2-----------------*/

let time = 36;
console.log(time);

if (time > 0 && time <= 15){
    console.log('first');
} else if (time > 15 && time <= 30) {
    console.log('second');
} else if (time > 30 && time <= 45) {
    console.log('third');
} else if (time > 45 && time <= 59) {
    console.log('fourth')
}

/*-----------------2.3-----------------*/

let day = 15;
console.log(day);

if (day > 1 && day <= 10) {
    console.log('first');
} else if (day > 10 && day <= 20) {
    console.log('second');
} else if (day > 20 && day <= 31) {
    console.log('third');
}

/*-----------------2.4-----------------*/

let days = +prompt('Enter day please');

switch (days) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Enter a number from 1 to 7');
}

/*-----------------2.5-----------------*/

let person1 = 8;
let person2 = 5;
    if (person1 > person2){
        console.log(person1)
    } else if (person1 == person2) {
        console.log('числа рівні')
    } else if (person1 < person2) {
        console.log(person2)
    }

/*-----------------2.6-----------------*/

let x1 = null || 'default';
console.log(x1);

/*let x1 = 10;
let y1 = 20;
x1 = (x1 && y1 || y1);
/!*console.log(x1 && y1 || y1);*!/
console.log(x1);


let x2 = true;
let y2 = false;
console.log(x2 || y2);

x2 = (x2 && y2 || y2);
console.log(x2);*/

/*-----------------2.7-----------------*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration >= 5) {
    console.log('Супер');
} else {
    console.log('Мало');
}

if (coursesAndDurationArray[1].monthDuration >= 5) {
    console.log('Супер');
} else {
    console.log('Мало');
}

if (coursesAndDurationArray[2].monthDuration >= 5) {
    console.log('Супер');
} else {
    console.log('Мало');
}

if (coursesAndDurationArray[3].monthDuration >= 5) {
    console.log('Супер');
} else {
    console.log('Мало');
}

if (coursesAndDurationArray[4].monthDuration >= 5) {
    console.log('Супер');
} else {
    console.log('Мало');
}

if (coursesAndDurationArray[5].monthDuration >= 5) {
    console.log('Супер');
} else {
    console.log('Мало');
}



