// arrow function - нет варианта declaration, только анонимная и expressionб самовызывающуюся


//declaration
function add (a, b){
    return a + b;
}


//expression
const add2 = function (c, d){
    return c + d;
};


const add3 = a => a + b;  //если нет фигурных, то автоматический return


const arr = ['John', 'Oleg', 'Samuil', 'Semen', 'Peter', 'Innokentij'];

// for (let item of arr){    //для последовательного перебора массива, перебирает итерабельные обьекты
//     console.log (item);
// }


//Перебирающие методы - передается функция для каждого элемента массива

//1. arr.forEach((item, index, mass) => {        //item - каждый элемент массива(не ссылка на элемент, просто значение), index - номер эл-та в массиве, mass - массив
//     console.log(mass);
// }); 
// //лучше его, чем цикл фор, нужен для перебора массива, но возвращает undefined

// function foo (val){  //это личная переменная функции
//     val = 1;
// }
// foo (arr[0])
// console.log (arr)

// let blabla = arr;
// blabla = null; // уничтожили ссылку. потеряли ключ и остался оригинал

// если передать ссылку, то можно изменить, перезаписать массив


//2. ВАЖНО! const arr2 = arr.map ((userName, index, mass) => {   //создает новый массив
//     return {
//         userName,
//     }
// }) 
// console.log(arr2)

//нужен для нового видоизмененного массива


//3. const result = arr.some((item, index, mass) => item.length > 7)  //более гибкий чем includes, аналог ||
// console.log(result)

//4. const result = arr.every((item) => item.length > 10) // для всех элементов, аналог &&
// console.log(result)

//5. ВАЖНО! const result = arr.filter((item) => item.length > 5);
// console.log(result) //вернет новый массив, в массив входит сам элемент, если функция true

//6. const result = arr.find((item) => item === 'Oleg'); //работает с массивом чего угодно
// console.log(result)

//часто будем сталкиваться с массивом обьектов, includes в массиве обьектов ничего не найдет и indexOf тоже

// const result  = person.find((item) => item.userName === 'oleg'); //получили ссылку на обьект
// result.userName = 'olezha';
// Есть и findIndex - выдает номер


//7. const result = person.sort((person1, person2) => {
//     return person1.age - person2.age;
// })
// const person = [
//     {userName: 'Oleg', age: 40},
//     {userName: 'Miron', age: 30},
//     {userName: 'Vlad', age: 29},
//     {userName: 'Vova', age: 10},
// ];


//8. const result = numbers.reduce((sum, num, index, mass) => {   //возвращает аккумулятор финальный
//     return sum + num;     //он автоматически присваивает; sum то нулевой элемент массива
// });
// console.log(result)
//первый аргумент - функция, а второй - что должно быть начальным аккумулятором
const numbers = [1,2,4,55,3,0,1 ,444,56];
const result = numbers.reduce((acc, number, index, mass) => {
    if (
        mass.includes(number, index + 1) && 
        !acc.includes(number)
    ){
        acc.push(number);
    }
    
    return acc;
}, []);
console.log(result)




//переписать все домашки без использования циклов, только с методами