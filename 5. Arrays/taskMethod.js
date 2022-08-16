// Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// let enteredUser = prompt ('Введите имя на английском');
// if (people1.includes(enteredUser)){
//     people2.push(enteredUser);
// }
// console.log (people2)


// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива
// let enteredUser = prompt ('Введите имя на английском');
// if (people2.includes(enteredUser)){
//     people2.splice(people2.indexOf(enteredUser), 1 ); 
// }
// console.log (people2)

// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.
// let newArray = [];
// for (let i = 0; i < people1.length; i++){
//     if (people2.includes(people1[i])){
//         newArray.push(people1[i]);
//     }
// }
// console.log(newArray);

// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// for (let i = 0; i < people1.length; i++){
//     if (people2.includes(people1[i])){
//         people2.splice(people1.indexOf(people1[i]), 1);
//     }
// }
// let result = people1.concat(people2);
// console.log (result);

// 5. Отсортируйте получившийся массив по алфавиту
// result.sort();
// console.log(result);



// 1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив
// let names = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let newNames = names.splice(2, 3);
// console.log(newNames);

// 2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива
// let names = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// names.unshift(names.pop());
// names.unshift(names.pop());
// console.log(names)

// 3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"
// let names = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// names.splice(4, 2, 'Oleg', 'Valerchik');
// names[names.indexOf("Eddie")] = 'Oleg';
// names[names.indexOf("Janett")] = 'Valerchik';
// console.log(names) 

// 4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")
let names = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
names.reverse();
names.fill("Mitrofan", 0, 4)
console.log(names); //fill 

// 5. Даны два массива 
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]
// взять из второго массива все имена начина с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)
// let names1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let names2 = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];
// let result = names1.concat(names2.slice(2));
// console.log(result)



