/*- створити блок,
- додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.*/

const block = document.createElement('div');
console.log(block);
block.innerText = 'TEXT';

block.classList.add('wrap');
block.classList.add('collapse');
block.classList.add('alpha');
block.classList.add('beta');

block.classList.add('style');

document.body.appendChild(block);

let clone = block.cloneNode(true);
document.body.appendChild(clone);

/*- Є масив:
['Main','Products','About us','Contacts']
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)*/

let menu = ['Main', 'Products', 'About us', 'Contacts'];
console.log(menu);

let menuUl = document.createElement('ul');
document.body.appendChild(menuUl);

for (const element of menu) {
    console.log(element);
    let elementLi = document.createElement('li');

    elementLi.innerText = element;

    menuUl.appendChild(elementLi);
}


/*- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let arrDiv = document.createElement('div');
console.log(arrDiv);
document.body.appendChild(arrDiv);

for (const arrElement of coursesAndDurationArray) {

    let item = document.createElement('div');
    let arrInfoH2 = document.createElement('h2');
    let arrInfoH4 = document.createElement('h4');

    arrInfoH2.innerText = `${arrElement.title}`
    arrInfoH4.innerText = `${arrElement.monthDuration}`

    item.append(arrInfoH2, arrInfoH4);
    arrDiv.appendChild(item);

}

/*- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
в якому буде <h1 class='heading'>  з title  елементу,
та <p class='description'> з monthDuration елементу.
Завдання робити через цикли.*/


let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let coursDiv = document.createElement('div');
/*console.log(coursDiv);*/
document.body.appendChild(coursDiv);

for (const coursElement of coursesAndDurationArray1) {

    let items = document.createElement('div');
    let coursElementH1 = document.createElement('h1');
    let coursElementP = document.createElement('p');

    items.classList.add('item');
    coursElementH1.classList.add('heading');
    coursElementP.classList.add('description');

    coursElementH1.innerText = `${coursElement.title}`
    coursElementP.innerText = `${coursElement.monthDuration}`

    items.append(coursElementH1, coursElementP);
    arrDiv.appendChild(items);

}


/*- є масив simpsons, котрий лежить в arrays.js
 (на цей момент ви вже знаєте де він знаходиться)
Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'>
та наповнити його данними з об'єкту.
Якщо людською мовою:
під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту*/

let simpssDiv = document.createElement('div');
console.log(simpssDiv);
document.body.appendChild(simpssDiv);

let simpsons = [
    {
        name: 'Bart ',
        surname: ' Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer ',
        surname: ' Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge ',
        surname: ' Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa ',
        surname: ' Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie ',
        surname: ' Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const simpson of simpsons) {
    let div = document.createElement('div');
    console.log(div);
    div.classList.add('simpson')

    simpssDiv.appendChild(div);

    let member = document.createElement('div');

    let infoDiv = document.createElement('div');

    let imgDiv = document.createElement('div');

    let nameH2 = document.createElement('h2');
    /*let surnameH2 = document.createElement('h2');*/
    /*let age = document.createElement('h2');*/
    let infoSpan = document.createElement('span');
    let img = document.createElement('img');
    let header = document.createElement('div');


    member.classList.add('member');
    infoDiv.classList.add('infoDiv');
    infoSpan.classList.add('infoSpan');
    imgDiv.classList.add('imgDiv');
    header.classList.add('header');



    nameH2.innerText = `${simpson.name}  ${simpson.surname}  ${simpson.age} `;
   /* surnameH2.innerText = `${simpson.surname}`;*/
    /*age.innerText = `${simpson.age}`;*/
    infoSpan.innerText = `${simpson.info}`;
    img.src = simpson.photo;

    div.appendChild(member);

    member.append(infoDiv, imgDiv);
    imgDiv.appendChild(img);
    infoDiv.append(header, infoSpan);
    header.append(nameH2);

}


/*Цикл в циклі
- Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

Створити для кожного елементу масиву свій блок, блок розділити блоками,
в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом*/

let htmlDivElement = document.createElement('div');
console.log(htmlDivElement);
document.body.appendChild(htmlDivElement);

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

/*console.log(coursesArray);*/

for (const coursesElement of coursesArray) {

    let firstDiv = document.createElement('div');
    firstDiv.classList.add('firstDiv');
    htmlDivElement.appendChild(firstDiv);

    let header = document.createElement('div');

    let headInfo = document.createElement('div');
    let title = document.createElement('h1');

    let headMonth = document.createElement('div');
    let monthDuration = document.createElement('h2');

    let headHour = document.createElement('div');
    let hourDuration = document.createElement('h2');

    let moduleDiv = document.createElement('div');

    let ulMod = document.createElement('ul');
    moduleDiv.appendChild(ulMod);
    for (const liElement of coursesElement.modules) {
        let li = document.createElement('li');
        ulMod.appendChild(li);
        li.innerText = liElement;
    }




    title.innerText = `Name - ${coursesElement.title}`;
    monthDuration.innerText = `Month duration - ${coursesElement.monthDuration}`;
    hourDuration.innerText = `Hour duration - ${coursesElement.hourDuration}`;


    header.classList.add('head');

    headInfo.classList.add('headInfo');
    headMonth.classList.add('headMonth');
    headHour.classList.add('headHour');

    moduleDiv.classList.add('moduleDiv');


    firstDiv.append(header, moduleDiv);

    header.append(headInfo, headMonth, headHour);
    headInfo.appendChild(title);
    headMonth.appendChild(monthDuration);
    headHour.appendChild(hourDuration);


}




