// while () {}
// do {} while ()
// for () {}

// while (condition){  //со временем становится ложью
//      loop body
// }

// let i = 5;
// while ( i >= 0 ) {
//     console.log (i);   //console.log(i--);
//     i--;
// };

// let i = 0;
// do {          //Сначала выполняет тело, сработает как минимум один раз
//     console.log ('Hello');
// } while (i > 5);

//после конструкций языка не ставить точку с запятой

// let numbers;
// do {
//     numbers = +prompt ('Введите число');
// } while (numbers !== 5)   //выполнять до тех пор пока


// for (let i = 0; i < 5; i++) {      //let i = 0 выполнится только один раз за весь цикл
//     console.log(i);
// } 

//i % 2 !== 0 так лучше находить нечетные числа

// for ( let i = 0; i <= 10; i++){
//     if (i === 4) {
//        continue;     //на этом моменте итерация (ОДНА) прервется и до консоль лог дело не дойдет, перейдет к следующей проверке
//     }
//      console.log(i);
// }

// for ( let i = 0; i <= 10; i++){
//     if (i === 4) {
//        break;     //цикл полностью выключится
//     }
//      console.log(i);
// }

// for ( let i = 1; i <= 10; i++){
//     for(let j = 1; j < 5; j++){  //внешний цикл ждет, пока отработает ВЕСЬ внутренний цикл
//         console.log (`${i}.${j}`);
//     }
// }

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j < 5; j++) {
//         if (i === 3 || j === 3) {
//             continue;   
//         }
//         console.log (`${i}.${j}`);
//     }
// }

// for (let i = 10; i < 100; i++) {
//     if ( i % 4 === 0 && i % 6 !== 0) {
//         console.log(i);
//     }
// }

// let userNumber = +prompt('Введите число');
// for ( ; userNumber >= 0 ; userNumber--){

//     console.log(userNumber);
// }
