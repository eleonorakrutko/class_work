//array methods
// const arr = [34, 46, 12, -64, 0]
// const arr2 = ['ho' , 'kdkd' , 'okoo']
// let resultArr = arr2.concat(arr)    //concat не мутирует массивы, он под капотом создает новый массив, также может добавить элемент в новый массив

// let resultArr = arr2.concat([]) // копия массива

// let a = [1, 2, 3]; 
// let b = a;  // мы дали ключ от массива переменной b и теперь b будет равно a, так как они ссылаются на один массив
// b[0] = 999;
// console.log (a)
// console.log( arr.concat(arr).concat(arr2))

// copyWithin - практически не используется
// fill - наполняет одинаковыми значениями массив   arr.fill('smth', 'с какой позиции наполнять массив', 'до каких пор наполнять') arr.fill(1, 10, 5) используется только если надо наполнить пустой массив
// flat - если есть массивы в массиве, то обьединит их в один массив
// arr.reverse() // переворачивает весь массив

// console.log(arr[0][4]) //для двойного массива

//-----------------------------Важные методы-------------------------------
// arr.includes(34) // возвращает булево значение, для проверки есть или нет значение в массиве

// arr.push()  //добавляет элементы всегда в конец массива, возвращает длину массива

// arr.pop()  //он удаляет только один последний элемент массиваб возвращает удаленный элемент

// arr.shift()  //удаляет нулевой элемент массива, такой же как поп, шифт медленнее его, так как изменит нумерацию элементов

// arr.unshift('smth', 'smth else')  // добавляет вначало элемент, вернет длину массива

// !! arr.indexOf('two') //узнать индекс элемента, если не найдет такого элемента, то вернет -1, может принять второй аргумент (указываем позицию с какой начинать искать)
// arr2[arr2.indexOf('okoo')] = 'SOME NEW VALUE'

// arr.lastIndexOf() // ищет значение с конца

// arr.sort()  //сортирует по алфавиту  

// !! arr.slice()  // не мутирует массив, возвращает новый массив, можно скопировать старый массив если не передавать аргумент, передается аргумент индекса с которого нужно копировать кусок, если откуда до куда, то второй аргумент

// arr.splice()  // 1е значение с какого элемента удалять, 2е сколько штук удалить, мутирует массив, можно добавить 3е значение в виде различных элементов для добавления на место удаленных. Это удаление и замена в одном методе

//быстрая пузырьковая сортировка http://mathhelpplanet.com/static.php?p=javascript-algoritmy-sortirovki
//https://www.youtube.com/results?search_query=cs50+%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0






//arr.join()  //не мутирует, преобразует в строку, может ставить разделители между элементами

// STRING METHOD 
// string.split()  //преобразует строку в массив, аргументу передается разделитель для определения элементов (где разделять элементы массива)

//-------------------------ES6 - операторы, которые нужно знать:
// Math.max (2, 3 , 6) - возвращает макс число
// Math.min (...arr) -возвращает мин число


//--------SPREAD оператор--------
// отдает не массив, а содержимое массива. Должен быть обернут во что-то.
// console.log (...arr)
// let arr5 = [...arr4] - создали копию массива
// пользоваться при обьединении, копиях массивов и тд.

//--------DESTRUCTURING
const arr = [1,4,5,6,7,8]; 
// const [ a, b, c ] = arr; //=== const a = arr[0], const b = arr[1] itc
// через запятую указываются переменные, можно и ничего не писать [a, , c]
// короткая запись для назначения значения по умолчанию, если элементов массива нет [a, b = 'default value']

//--------REST
const [a, b, ...blabla] = arr; //формирует массив со всем остатком, он должен быть только один на одну операцию




