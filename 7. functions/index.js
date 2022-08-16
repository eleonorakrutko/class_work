
//function declaration
// function nameFunction (a, b, c = 0) {
//     console.log(a + b)
// }

// nameFunction(16, 20);  // запуск функции
// nameFunction(10, 30) //если не передать достаточное количество аргументов, то аргумент без значения будет undefined, а результат функции NaN, но можно присвоить значение по умолчанию

// //записывать запуск функции куда либо нельзя, ибо вернет undefined

// //function expression
// //именовать функцию при таком способе не нужно
// let result = function nameFunction (a, b, c = 0) {
//     console.log(a + b)
// };


// function add (a, b){
//     const res = a + b;
//     if (typeof a !== 'number'){
//         return;
//     }
//     return res;   //результат работы функции, только одно значение
// }
// const calc = 10 / add(2,3);
// console.log(calc)



// const foo = function(){
//     console.log('Im fooo')
// }
// foo();

// function add (a,b){
//     return a + b;
// }
// const test = add;  //если не запускаем, то имеем дело с ее телом, а test стал функцией
// add.cats = 'pushok';
// console.log(add.cats)


//функции это обьекты
//recursive
//hosting func expression
//анонимная функция - func expression


//написать функцию которая возвращает среднее арифмтическое 4х чисел

// function arithmetic(a, b, c, d){
//     let arithmeticMean = (a + b + c + d) / 4;
//     return arithmeticMean;
// }
// arithmetic(1, 1, 2, 2);

// function average(...blabla){
//     console.log(blabla)
// }
// average(1,23,35,46,57,568,46,245,24)

//arguments - псевдомассив, так как нумерация начинается с нуля и есть свойство lenght, это массивоподобный итерабельный обьект (к нему применяется рест, спред и можно пройтись циклом)
