// const team = ['John', 'Valerchik', 'Vovanchik', 'Gleb', 'Oleg']; 
// //В массиве желательно хранить один тип данных

// const player = team[2 + 1]; //нумерация в массиве идет с нуля, здесь может быть любое вычисление главное чтобы получилось одно число
// //если обратимся к элементу которого нет, то выдаст undefined

// team.length // длина массива

// // team.length = 10 // добавит еще пусты ячеек, будет пять пустых ячеек
// // lenght никогда не перезаписываем

// team[0] =  'Bob'; //переприсвоение

// // team[team.length - 1] //последний элемент массива

// // const team2 = new Array (10); //одно значение выдаст пустое количсетво ячеек

// team [team.length] = 'mitrophan'

// for (let i = 0; i < team.length ; i++) {
//     console.log (`Mister ${team[i]}`)
// }


//------------------------TASKS-------------------------------//

// 1. дан массив 10 чисел. вывести в консоль сумму всех элементов массива
// let numbersArray = [1, 5, 10, 33, 2, 4, 100, 30, 69, 6];
// let sum = 0;
// for (let i = 0; i <numbersArray.length; i++){
//     sum += numbersArray[i];
// }
// console.log (sum)



// 2. найти среднее арифметическое всех элементов массива, которые стоят 
// на четных местах (0,2,4...)
// let numbersArray = [1, 5, 10, 33, 2, 4, 100, 30, 69, 6];
// let arithmetic = 0;
// let division = 0;
// for (let i = 0; i < numbersArray.length; i++){
//     if (i % 2 === 0){
//         arithmetic += numbersArray[i];
//         division++;
//     }
// }
// arithmetic = arithmetic / division;
// console.log (arithmetic)




// 3. дан исходный массив [2,-65,7,-1,26,48,-93,58,9] 
// создать новый массив, элементы которого противоположны по знакам исходного
// let numArray = [2, -65 ,7 ,-1 ,26 ,48 ,-93 ,58 ,9 ];
// let newArray = [];
// for (let i = 0; i < numArray.length; i++){
//     newArray[newArray.length] = -numArray[i];
// }
// console.log (newArray);



// 4. создать пустой массив длиной 10
// автоматически заполнить массив нулями и единицами, начиная с единицы
// let emptyArray = [];
// emptyArray[emptyArray.length] = 1;
// for (let i = 0; emptyArray.length < 10; i++){
//     emptyArray[emptyArray.length] = Math.round(Math.random()*1);
// }
// console.log (emptyArray)


// 5. заполнить массив последовательными нечетными числами (длина 10)
// let emptyArray = [];
// for (let i = 0; emptyArray.length !== 10; i++){
//     if (i % 2 !== 0){
//         emptyArray[emptyArray.length] = i;
//     }
// }
// console.log (emptyArray)


// 6. с помощью цикла создать массив, каждый элемент которого равен
// квадрату своего номера (длина 10)

// let numbersArray = [];
// for (let i = 0; numbersArray.length !== 10; i++){
//     numbersArray[i] = i**2;
// }
// console.log (numbersArray)


// 7. дан массив 10 чисел. вывести в консоль количество четных
// элементов из этого массива
// let numbersArray = [1, 5, 10, 33, 2, 4, 100, 30, 69, 6];
// let counter = 0;
// for (let i = 0; i < numbersArray.length; i++){
//     if (numbersArray[i] % 2 === 0){
//         counter++;
//     }
// }
// console.log (counter)


// 8. дан массив 10 чисел. вывести наибольшее число из этого массива
// let numbersArray = [1, 5, 10, 33, 2, 4, 100, 30, 69, 6];
// let biggestNum = numbersArray[0];
// for (let i = 0; i < numbersArray.length; i++){
//     if (numbersArray[i] > biggestNum){
//         biggestNum = numbersArray[i];
//     }
// }
// console.log (biggestNum);

// 9. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// найдите количество элементов массива, которые отличны от наибольшего 
// не больше чем на 10%
// let numbersArray = [1, 5, 10, 33, 2, 4, 100, 30, 99, 6];
// let biggestNum = numbersArray[0];
// let counter = 0;
// for (let i = 0; i < numbersArray.length; i++){
//     if (numbersArray[i] > biggestNum){
//         biggestNum = numbersArray[i];
//     }
// }
// let procentOfBiggestNum = biggestNum * 10 / 100;
// for (let i = 0; i < numbersArray.length; i++){
//     if (numbersArray[i] !== biggestNum && biggestNum - numbersArray[i] <= procentOfBiggestNum){
//         counter++;
//     }
// }
// console.log (counter)


// 10. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// выведите на экран наибольший ЧЕТНЫЙ элемент массива
// let numbersArray = [1, 5, 10, 33, 2, 4, 81, 30, 99, 6];
// let biggestNum = numbersArray[0];
// for (let i = 0; i < numbersArray.length; i++){
//     if (numbersArray[i] > biggestNum && numbersArray[i] % 2 === 0){
//         biggestNum = numbersArray[i];
//     }
// }
// console.log (biggestNum);


// 11. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// пользователь вводит число n, вывести в консоль элемент массива
// который наиболее близок к n (если таких элементов несколько, вывести несколько)
// let numbersArray = [1, 5, 10, 33, 78, 4, 181, 30, 199, 6];
// let userEnterNum = +prompt ('Введите число');
// let nearLessNum = numbersArray[0];
// let nearMoreNum = numbersArray[0];
// let same = false;
// let bothNum = '';
// for (let i = 0; i < numbersArray.length; i++){

//       if (Math.abs(userEnterNum - numbersArray[i]) < Math.abs(userEnterNum - nearLessNum)){
//          nearLessNum = numbersArray[i]
//       }

//    if (userEnterNum - nearLessNum === nearMoreNum - userEnterNum){
//       bothNum = nearLessNum + ' ' + nearMoreNum
//    }
// }

// if (same){
//    console.log (userEnterNum);
// } else if (bothNum){
//    console.log (bothNum)
// } else if (userEnterNum - nearLessNum < nearMoreNum - userEnterNum){
//    console.log (nearLessNum)
// } else if (userEnterNum - nearLessNum > nearMoreNum - userEnterNum){
//    console.log (nearMoreNum)
// } 
// // создать массив разниц между введенным числом и в нем найти число стремящееся к нулю