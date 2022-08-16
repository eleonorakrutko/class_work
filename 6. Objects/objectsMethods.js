// "use strict"
// methods+, get+, set+, property descriptor+, this+, (call+, apply+, bind+), setInterval+, setTimeout+, callback

// func compose

// const pipe = [
//     () => {},
//     function () {}
// ]

// function eat (food) {
//     console.log(`${this.userName} eats ${food}`);  //это ссылка на обьект, кот вызывает эту функцию
// }
//use strict не дает this быть window, он будет undefined

// const begat = (run) => {             //!!! Важно !!! у стрелочной функции нет this, она будет искать this
//     console.log(`${this.userName} runs`)  //она пойдет в соседний scope в window и даст пустую строку
// }

// const person = {
//     userName: 'John',
//     age: 23,
//     stack: ['CSS', 'HTML', 'JS'],
//     liveInCity: true,
//     run: begat,
//     walk () {                   //walk: function (){} тоже самое
//         console.log( `walks`);
//     },
//     zhrat: eat,
// };

// const person2 = {
//     userName: 'Tolik',
//     age: 23,
//     stack: ['CSS', 'HTML', 'JS'],
//     liveInCity: true,
//     run: () => {
//         console.log('person runs');
//     },
//     walk () {                   
//         console.log( `walks`);
//     },
//     zhrat: eat,
// };
// // Если в поле обьекта есть функция, то это метод обьекта

// // this - контекст вызова функции
// person.zhrat('cake');   //через zhrat попадаем в eat
// person2.zhrat('fich')
// //Глобальный обьект window создает браузер, новая вкладка - новый обьект window
// //window === потере контекста

// // const valerchikKushat = person2.zhrat; //потеря контекста
// // valerchikKushat('ezha')
// function fly (dest) {
//     console.log(`${this.name} flies to ${dest}`)
// }
// const bird = {
//     name : 'Kesha',
//     fly    //ссылка на функцию
// }
// bird.fly('south')


// const ezh = {
//     name:'SENA',
//     zhrat: eat,
// }

// bird.fly.call(ezh, 'south') //передаем ссылку на функцию
// fly.call(ezh, 'north')  //вызов функции в контексте ежа, аргументы передаются в конце, первый аргумент - тот кто должен быть this, вызывает сразу же
// fly.apply(ezh, ['north'])    //два аргумента, второй массив, оба делают одно и тоже

// function foo () {
//     function smth () {
//         console.log(this)
//     }

//     const bar = () => {
//         console.log(this)   //вызов в контексте foo
//     }

//     smth()
//     bar()
// }
// foo.call(person)
// //функции узнают свой контекст в момент вызова
// // плюсы стрелочной функции только тогда, когда она в scope другой функции

// //Bind - возвращает новую функцию
// function eat (food, tool) {
//     console.log(`${this.userName} eats ${food} by ${tool}`); 
// }
// const foo2 = eat.bind(ezh, 'meat');   //bind не вызывает eat, а на ее основе делает НОВУЮ функцию и выкидывает this, прибивает вместо нее ежа навсегда, тоже самое и с аргументами!!!!
// foo2('apple')


//-----------------------------------------------------------------------------------------

// setTimeout
// const id = setTimeout(function () {    //он сам вызывает функцию
//     console.log('IM WORKING');
// }, 2000);
// clearTimeout(id) //отменяет запуск

// //setInterval
// const id = setInterval(() => {
//     console.log('im working')
// }, 500)
// clearInterval(id);

// let i = 0;
// const id = setInterval(() => {
//     console.log(++i)
// }, 500);

// setTimeout(() => {
//     clearInterval(id);
// }, 5000)

const person = {
    firstName: 'John',
    lastNmae: 'Jhonson',
    _age: 0  //это хранилище для age. Нижнее подчеркивание - знак поле не трогать для других разрабов
}

//property descriptor
Object.defineProperty(person, 'city', {value: 'Gomel', writable: false, enumerable: false, configurable: true}); //аналог добавления поля, все поля дескрипторы в false

//writable запрещает перезапись
//enumerable запрещает быть перечисляемым
//configurable на этом поле нельзя вызвать defineProperty и нельзя его удалить
console.log(person)
console.log(Object.getOwnPropertyDescriptor(person, 'city')) //получаем дескриптор любого свойства чтобы посмотреть
console.log(Object.keys(person)) //возвращает массив ключей обьектов

Object.defineProperties(person, {
    city: {
        value: 'Eremino',
        writable: false
    },
    bus: {
        value: 43,
        writable: false
    }
})
console.log(Object.getOwnPropertyDescriptors(person))

Object.defineProperty(person, 'fullName', {
    get () {
        return `${this.firstName} ${this.lastNmae}`    //лучше ссылаться на this
    },            //для чтения поля, ничего не при нимает, важен return
    set (value) {
        const nameArr = value.split(' ');
        this.firstName = nameArr[0];
        this.lastNmae = nameArr[1];
    },             //для перезаписи поля, value - то что пытаемся присвоить, return не нужен
    enumerable: true,
    configurable: true
})
person.fullName = 'Valerchik Ivanov'
// либо get и set либо writable, тоже самое с value
console.log(person)

Object.defineProperty(person, 'goTo', {
    get () {
        return run.bind(this)
    }
})

// setTimeout(person.goTo //здесь подставляется ссылка на run, слева не будет обьекта//, 1000)
Object.defineProperty(person, '_age', {enumerable:false})
Object.defineProperty(person, 'age', {
    get(){
        return this._age
    },
    set(val){
        if (typeof val === 'number' && val > 0 && val < 95) {
            this._age = val;  //_age Для того чтобы сеттер не вызывал себя бесконечно(рекурсия)
        } else {
            console.error('VALUE SHOULD BE A NUMBER BALBES!')
        }
    },
    enumerable: true
})
person.age = 90;
console.log(person.age)


//Как запретить изменять поле обьекта
Object.preventExtensions(person); //запрещает расширять обьект
Object.isExtensible(person)   //boolean, был ли обьект пропущен через preventExt
Object.seal(person) // запрещает удалять и добавлять
Object.isSealed(person)
Object.freeze(person)  //запрещено все
Object.isFrozen(person)
// они работают только на один уровень вложенности
person.city = 'jfjfj';
delete person.firstName
console.log(person)