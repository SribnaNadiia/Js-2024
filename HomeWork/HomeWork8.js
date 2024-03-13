/*- Створити функцію конструктор для об'єктів User
з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/

function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
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