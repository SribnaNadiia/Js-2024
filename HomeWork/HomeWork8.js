/*- Створити функцію конструктор для об'єктів User
з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/

function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(21, 'Nadiia', 'Sribna', 'nadiia@gmail.com', '+380635488910'),
    new User(9, 'Olga', 'Golovanova', 'olya@gmail.com', '+380684852610'),
    new User(10, 'Maryna', 'Fedosha', 'mary@gmail.com', '+380687923562'),
    new User(3, 'Oksana', 'Melanchenko', 'oxi@gmail.com', '+3809856261'),
    new User(12, 'Igor', 'Malyniak', 'igor@gmail.com', '+3809845876'),
    new User(19, 'Oleg', 'Safonov', 'oleg@gmail.com', '+3809882696'),
    new User(14, 'Ivan', 'Ivanov', 'ivan@gmail.com', '+3809862396'),
    new User(8, 'Maria', 'Jahmenova', 'maria@gmail.com', '+3809628396'),
    new User(16, 'Zoya', 'Nikitiuk', 'zoya@gmail.com', '+3809628547'),
    new User(17, 'Artem', 'Fomenko', 'artem@gmail.com', '+3809636447'),
];

console.log(users);

/*- Взяти масив з  User[] з попереднього завдання,
та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/

    let usFilter = users.filter((user) => user.id >= 10);
console.log(usFilter);

/*- Взяти масив з  User[] з попереднього завдання,
та відсортувати його по id. по зростанню (sort)*/

let usSort = users.sort((firstObj, secondObj /*сусід*/) => {
    return firstObj.id - secondObj.id;
});

console.log(usSort);

/*- створити класс для об'єктів Client з полями
id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
     new Client(7, 'Borys', 'Beltukov', 'borya@gmail.com', '+380684852610',['Kettle', 'Egg slicer', 'Colander ', 'Tureen ']),
     new Client(18, 'Alexey', 'Ivanov', 'alex@gmail.com', '+380684858910',['Blender', 'Breadbox']),
     new Client(11, 'Andriy', 'Morozov', 'andry@gmail.com', '+380684858481',['Frying pan']),
     new Client(19, 'Anna', 'Andreeva', 'any@gmail.com', '+380856858482',['Grater ', 'Meat mallet ', 'Potato peeler','Teapot']),
     new Client(9, 'Oxana', 'Kuhareva', 'any@gmail.com', '+380857456489',['Bin', 'Breadbox', 'Meat mallet', 'Tureen']),
     new Client(3, 'Galina', 'Timoshko', 'galya@gmail.com', '+380857652485',['Bin', 'Glass', 'Knife', 'Breadbox', 'Pitcher']),
     new Client(5, 'Maryna', 'Olvinska', 'mary@gmail.com', '+380857474363',['Pitcher', 'Glass ', 'Dishwasher']),
     new Client(21, 'Olga', 'Frolova', 'olya@gmail.com', '+380885674362',['Frying pan ', 'Glass']),
     new Client(30, 'Anastasia', 'Telychko', 'stasya@gmail.com', '+380885474367',['Knife', 'Potato peeler', 'Dishwasher']),
     new Client(2, 'Nyna', 'Zaborodko', 'nina@gmail.com', '+380885364369',['Glass', 'Tureen']),


];
console.log(clients);

/*- Взяти масив (Client [] з попереднього завдання).
Відсортувати його по кількості товарів в полі order по зростанню. (sort)
*/

let clSort = clients.sort((firstObj, secondObj /*сусід*/) => {
    return firstObj.order.length - secondObj.order.length;
});

console.log(clSort);

/*- Створити функцію конструктор яка дозволяє створювати об'єкти car,
з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
    і додає його в поточний об'єкт car*/

function Cars(model, manufacturer, yearManufacture, maxSpeed, engineSize, driver ) {

    this.model = model;
    this.manufacturer = manufacturer;
    this.yearManufacture = yearManufacture;
    this.maxSpeed = maxSpeed;
    this.engineSize = engineSize;
    this.driver = driver;



/*    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`*/

   this.drive = function drive() {
        console.log('їдемо зі швидкістю' + ' ' + `${car.maxSpeed}` + ' ' + 'на годину');
    }

/* -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`*/
    this.info = function info() {
        console.log(
            'model' + ' ' + '-' + ' ' + `${this.model = car.model}` + ',',
            'manufacturer' + ' ' + '-' + ' ' + `${this.manufacturer = car.manufacturer}` + ',',
            'year of manufacture' + ' ' + '-' + ' ' + `${this.yearManufacture = car.yearManufacture}` + ',',
            'maximum speed' + ' ' + '-' + ' ' + `${this.maxSpeed = car.maxSpeed}` + ',',
            'engine size' + ' ' + '-' + ' ' + `${this.engineSize = car.engineSize}` + ',',
        );
    }


 /*-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed*/

    this.increaseMaxSpeed = function increaseMaxSpeed(newSpeed) {

        console.log(this.maxSpeed + newSpeed);
    }

/*-- changeYear (newValue) - змінює рік випуску на значення newValue*/

    this.changeYear = function changeYear(newValue) {
        console.log(this.yearManufacture = newValue);
    }


/* -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
    і додає його в поточний об'єкт car*/

    this.addDriver = function (driver) {
        console.log(this.addDriver = driver)

    }
}

let car = new Cars('Lincoln', 'USA', 2021, 200, '2.7');
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(50);
car.changeYear(2015);
car.addDriver({name: 'Semion', age: 31, experience: 7});


/*Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/

class Car {

    constructor(model, manufacturer, yearManufacture, maxSpeed, engineSize) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearManufacture = yearManufacture;
        this.maxSpeed = maxSpeed;
        this.engineSize = engineSize;
    }

/* -- changeYear (newValue) - змінює рік випуску на значення newValue*/
    changeYear (newValue){
        console.log(this.yearManufacture = newValue);
    }
}

/*-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`*/
class Driver extends Car{

    constructor(model, manufacturer, yearManufacture, maxSpeed, engineSize, drive) {
        super(model, manufacturer, yearManufacture, maxSpeed, engineSize);
        this.drive = drive;
    }
    driv(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
}

/*-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`*/

class Info extends Car{
    constructor(model, manufacturer, yearManufacture, maxSpeed, engineSize, info) {
        super(model, manufacturer, yearManufacture, maxSpeed, engineSize);
        this.info = info;
    }
    inf(){
        console.log(
            `model - ${this.model = cars.model}, `,
            `manufacturer - ${this.manufacturer = cars.manufacturer}, `,
            `year of manufacture - ${this.yearManufacture = cars.yearManufacture}, `,
            `maximum speed - ${this.maxSpeed = cars.maxSpeed}, `,
            `engine size - ${this.engineSize = cars.engineSize}`
            );
    }
}

/*-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed*/

class IncreaseMaxSpeed extends Car{
    constructor(model, manufacturer, yearManufacture, maxSpeed, engineSize, increaseMaxSpeed) {
        super(model, manufacturer, yearManufacture, maxSpeed, engineSize);
        this.increaseMaxSpeed = increaseMaxSpeed;
    }
    new1(newSpeed) {

        console.log(this.maxSpeed + newSpeed);
    }
}

/*-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

class AddDriver extends Car{

    constructor(model, manufacturer, yearManufacture, maxSpeed, engineSize, driver) {
        super(model, manufacturer, yearManufacture, maxSpeed, engineSize);
        this.driver = driver;
    }
    newDriver(driver){
        console.log(driver);
    }
}


let cars = new Car('Ford', 'USA', 2022, 220, '2.2');
console.log(cars);

console.log('===============================================================');
console.log('===============================================================');

let driver = new Driver('Ford', 'USA', 2022, 220, '2.2', ['їдемо зі швидкістю' + ' ' + `${cars.maxSpeed}` + ' ' + 'на годину'])
console.log(driver);
driver.driv();

console.log('===============================================================');
console.log('===============================================================');


let info = new Info('Ford', 'USA', 2022, 220, '2.2',
    ['model' + ' ' + '-' + ' ' + `${this.model = car.model}` + ',',
    'manufacturer' + ' ' + '-' + ' ' + `${this.manufacturer = car.manufacturer}` + ',',
    'year of manufacture' + ' ' + '-' + ' ' + `${this.yearManufacture = car.yearManufacture}` + ',',
    'maximum speed' + ' ' + '-' + ' ' + `${this.maxSpeed = car.maxSpeed}` + ',',
    'maximum speed' + ' ' + '-' + ' ' + `${this.engineSize = car.engineSize}` + ',']);
console.log(info);
info.inf();

console.log('===============================================================');
console.log('===============================================================');

let increaseMaxSpeed = new IncreaseMaxSpeed('Ford', 'USA', 2022, 220, '2.2');
increaseMaxSpeed.new1(10);

console.log('===============================================================');
console.log('===============================================================');

cars.changeYear(2007);

console.log('===============================================================');
console.log('===============================================================');

let addDriver = new AddDriver('Ford', 'USA', 2022, 220, '2.2', 'Semion');
console.log(addDriver);
addDriver.newDriver('Semion');


/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/


function Cinderella(name, age , footsize) {

    this.name = name;
    this.age = age;
    this.footsize = footsize;
}

let women = [
    new Cinderella('Maryna', 18, 41,),
    new Cinderella('Zoryana', 35, 39),
    new Cinderella('Nadiia', 21, 36),
    new Cinderella('Eva', 42, 40),
    new Cinderella('Olga', 20, 45),
    new Cinderella('Emma', 15, 42),
    new Cinderella('Alysa', 27, 38),
    new Cinderella('Albina', 22, 35),
    new Cinderella('Snezhanna', 31, 37),
    new Cinderella('Aleftina', 27, 43)
];

class Prince {

    constructor(name, age, shoossize) {
        this.name = name;
        this.age = age;
        this.shoossize = shoossize;
    }
}

let men = new Prince('Alex', 25, 37);



for (const wom of women) {
    if (wom.footsize === 37){
        console.log(wom);
    }
}


let filter = women.filter((wom)=> wom.footsize ===men.shoossize);
console.log(filter);


function res(women) {console.log(women)}
women.forEach(res);



