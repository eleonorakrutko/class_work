'use strict';
// methods+, get, set, property descriptor, this+, (call+, apply+, bind+), setInterval, setTimeout, callback
// func compose

// const pipe = [
//     () => {},
//     function () {}
// ]

// function eat (food) {
//     console.log(`${this.userName} eats ${food}`);  //это ссылка на обьект, кот вызывает эту функцию
// }
//use strict не дает this быть window, он будет undefined

const begat = (run) => {             //!!! Важно !!! у стрелочной функции нет this, она будет искать this
    console.log(`${this.userName} runs`)  //она пойдет в соседний scope в window и даст пустую строку
}

const person = {
    userName: 'John',
    age: 23,
    stack: ['CSS', 'HTML', 'JS'],
    liveInCity: true,
    run: begat,
    walk () {                   //walk: function (){} тоже самое
        console.log( `walks`);
    },
    zhrat: eat,
};

const person2 = {
    userName: 'Tolik',
    age: 23,
    stack: ['CSS', 'HTML', 'JS'],
    liveInCity: true,
    run: () => {
        console.log('person runs');
    },
    walk () {                   
        console.log( `walks`);
    },
    zhrat: eat,
};
// Если в поле обьекта есть функция, то это метод обьекта

// this - контекст вызова функции
person.zhrat('cake');   //через zhrat попадаем в eat
person2.zhrat('fich')
//Глобальный обьект window создает браузер, новая вкладка - новый обьект window
//window === потере контекста

// const valerchikKushat = person2.zhrat; //потеря контекста
// valerchikKushat('ezha')
function fly (dest) {
    console.log(`${this.name} flies to ${dest}`)
}
const bird = {
    name : 'Kesha',
    fly    //ссылка на функцию
}
bird.fly('south')


const ezh = {
    name:'SENA',
    zhrat: eat,
}

bird.fly.call(ezh, 'south') //передаем ссылку на функцию
fly.call(ezh, 'north')  //вызов функции в контексте ежа, аргументы передаются в конце, первый аргумент - тот кто должен быть this, вызывает сразу же
fly.apply(ezh, ['north'])    //два аргумента, второй массив, оба делают одно и тоже

function foo () {
    function smth () {
        console.log(this)
    }

    const bar = () => {
        console.log(this)   //вызов в контексте foo
    }

    smth()
    bar()
}
foo.call(person)
//функции узнают свой контекст в момент вызова
// плюсы стрелочной функции только тогда, когда она в scope другой функции

//Bind - возвращает новую функцию
function eat (food, tool) {
    console.log(`${this.userName} eats ${food} by ${tool}`); 
}
const foo2 = eat.bind(ezh, 'meat');   //bind не вызывает eat, а на ее основе делает НОВУЮ функцию и выкидывает this, прибивает вместо нее ежа навсегда, тоже самое и с аргументами!!!!
foo2('apple')


setTimeout(function () {    //он сам вызывает функцию
    console.log('IM WORKING');
}, 2000);