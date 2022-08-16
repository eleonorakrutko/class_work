// const person = {
//     name: 'John',
//     age: 23,
//     isProgrammer: true,
//     stack: ['HTML', 'CSS', 'JS'],
//     size: {
//         width: 23,
//         height: 200,
//         adress: {
//             street: 'pushkina',
//         }
//     },
//     lastName: 'Petrov',
// };


// let a = 'name';

// console.log(person['name']);   //в этих скобках можно делать вычисления
// console.log(person[a]);
// console.log(person.name);

// person.name = 'Valerchik';    //изменение
// person.lastName = 'Ivanov';   //добавление
// console.log(person)

// console.log ('isProgrammer' in person) //поиск поля в обьекте (способ не очень)
// console.log(person.hasOwnProperty('isProgrammer')) //тоже для поиска поля, лечше использовать его

// delete person.age;      //удаление поля
// console.log(person)

// const person2 = {};
// for (let key in person) {     //key это название поля обьекта
//     // console.log(key)
//     // console.log(person[key])
//      if (Array.isArray(person[key])){
//          person2[key] = [...person[key]];
//          continue;
//      }
//     person2[key] = person[key];   // так копируем обьект
// }

//person.size.width = 30; //будет и в person2, так как мы скопировали ключ (работает с обьектами и массивами)

//копировать массивы через slice

// [] instanceof Array //узнать массив ли это
// Array.isArray([]) //тоже самое



//---rest---spread---destructuring  // !!!!!!!!!!!!!!!ИСПОЛЬЗУЕТСЯ ОЧЕНЬ ЧАСТО!!!!!!!!!!!!!

// const {                        
//     age: personAge = 100,
//     name,
//     stack: [
//         a,
//         b = 'blabla'
//     ],
//     size: {
//         height: vysota              //как добраться до вложенного элемента обьекта
//     } = {height: 250},
//     lastName = 'Ivaniv',
//     ...kusokPersona          //rest
// } = person;   //нужно писать такое же поле, которое указано в обьекте
// console.log(kusokPersona)

// const person2 = {...person}  //spread
// console.log(person2)

// age: personAge //переименование при деструктуризации
// console.log(lastName)
// const blabla = person.age; 

// const person2 = {
//     ...person,
//     stack: [...person.stack],
//     size: {...person.size}
// } //тоже копирование обьекта без ссылок // !!!!!!!!!!!!!!!ИСПОЛЬЗУЕТСЯ ОЧЕНЬ ЧАСТО!!!!!!!!!!!!!


// const nick = 'Bobik';
// const dog = {
//     age: 23,
//     nick    //интерпретатор ищет переменную с таким же именем и подставляет ее значение
// }

// const str = 'city';
// const person = {
//     name: 'Blbl',
//     [str]: 'Gomel'     //динамические названия
// }
