let age = 60;
// If используется для диапазонов значений.
//В if должно быть правдивое значение, круглые скобки только у if
// if (age > 18) {
//     console.log('Hello');
// } else{
//     console.log('Goodbye');
// }

// if (age < 18) {
//     console.log('Hello');
// } else if (age < 30) {
//     console.log('Goodbye');
// }
// если два правдивых значения, то выведет первое


// switch (age) {
//     case 0: //age===0
//     console.log ('Its a zero');
//     case 1:
//     case 10:
//     console.log ('Its ten');
//         break;  
//     case 20:
//     console.log ('Its twenty');
//         break;
//         default:
//         console.log('smth else');
// }

// Switch для перебора конкретных значений. Если он найдет верный кусок. то остальные тоже выполнятся без проверок
// С помощью break switch выключится.
// default является аналогом else
// В case  можно писать любой JS код, тоже самое и в else if

// Преобразование switch в if-else
// if (age === 0){
//     console.log ('Its a zero');
// } else if(age === 1 || age === 10){
//      console.log ('Its ten or first');
// } else if (age === 20){
//         console.log ('Its twenty');
// }

//Тернарный оператор - обладает тремя операндами, он всегда про возврат значений. может заменять if-else/ Нельзя исп с командами
// a ? b: c   - если a хранит в себе правдивое значение, значит вернет то что нахоится в b
// если первый ложный. то вернет c.

// let age2 = 2;
// console.log ( age2 > 10 ? 'hi' : 'hello' );
// console.log ( age2 < 2 ? 'hi' : age2 < 10 ? 'hello' : 'hi again');


// console.log всегда возврашает undefined.

// prompt всегда возвращает строку.
// let letter = prompt('Send me a letter'); 
// console.log(`you send ${letter}`);

//isNaN
let age = prompt ('How old are you?');
if (isNaN(age)){
     console.log();
} else if (age === '') {
    console.log();
} else if (age === null){
    console log('kfofkof');
} else {
    age = +age;
    alert('Ura');
}
