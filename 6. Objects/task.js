// 1. создать объект subscribers с полями oldSubscribers и newSubscribers
// добавьте в объект поле allSubscribers которое должно
//  хранить сумму oldSubscribers + newSubscribers
//  если число allSubscribers > 700 вывести you are famous, иначе try harder

// const subscribers = {
//     oldSubscribers: 600,
//     newSubscribers: 50,
// };
// subscribers['allSubscribers'] = subscribers['oldSubscribers'] + subscribers['newSubscribers'];
// if (subscribers['allSubscribers'] > 700){
//     console.log('You are famous');
// } else {
//     console.log('try harder');
// }

//  2. дан массив объектов [
//     {a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7}]
//  используя методы массивов и циклы 
//  вывести в консоль 'its valid', если во всех объектах поле a > b

// let arrayOfObjects = [{a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7}];
// let counter = 0;
// for (let i = 0; i < arrayOfObjects.length; i++){
//    if (arrayOfObjects[i]['a'] > arrayOfObjects[i]['b']){
//         counter++;
//    }
// }
// if(counter === arrayOfObjects.length){
//     console.log('its valid');
// } else {
//     console.log('not valid')
// }

//  3. на основе исходного массива создать массив таких же объектов, но поле b
//  должно быть возведено в квадрат
//  пример: [{a: 2, b: 1}, {a: 5, b: 144}, {a: 95, b: 49}]
let arrayOfObjects = [{a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7}];
let newArray = [...arrayOfObjects];
for (let i = 0; i < arrayOfObjects.length; i++){
   let b = arrayOfObjects[i]['b'];
   newArray[i].b = Number(b**2);
}
console.log(arrayOfObjects)

//  4. создать массив на основе предыдущего, в котором
//  поля a и b будут последовательно помещены в массив
//  пример: [ 2, 1, 5, 144, 95, 49]

