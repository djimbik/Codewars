//1 task
//[8 kyu]
//Even or Odd
function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

//2 task
// [8 kyu]
// Sum of positive
function positiveSum(arr) {
    return arr.reduce((sum, currentNum) => currentNum > 0 ? sum + currentNum : sum, 0)
}

//3 task
// [8 kyu]
//Return Negative
function makeNegative(num) {
    return num > 0 ? -num : num
}

//4 task
//[8 kyu]
// Remove First and Last Character

function removeChar(str){
    return str.slice(1, -1)
};

//5 task
//[8 kyu]
// String repeat
function repeatStr (n, s) {
    return s.repeat(n);
}

//6 task
//[8 kyu]
// Reversed Strings
function solution(str){
    return str.split('').reverse().join('');
}

//7 task
//[8 kyu]
// Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
    return bool ? 'Yes' : 'No';
}

//8 task
//[8 kyu]
// Grasshopper - Summation
var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    
    return result;
}

//9 task
//[8 kyu]
// Remove String Spaces
function noSpace(string){
    return string.split(' ').join('')
}

//10 task
//[8 kyu]
// Find the smallest integer in the array
function findSmallestInt(args) {
    return Math.min(...args)
}

//11 task
//[8 kyu]
// Find the smallest integer in the array
function findSmallestInt(args) {
    return Math.min(...args)
}

//12 task
//[8 kyu]
// Counting sheep... (array with true & false, нам нужны только True)
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(sheep => sheep).length
}

//13 task
//[8 kyu]
// Square(n) Sum For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    return numbers.reduce((sum, num) => sum + num ** 2, 0)
}

//14 task
//[8 kyu]
// Century From Year 1705 --> 18 1900 --> 19
const century = year => Math.ceil(year/100)

//15 task
//[8 kyu]
// Basic Mathematical Operations
function basicOp(operation, value1, value2){
  switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
    }
}

//16 task
//[8 kyu]
// Convert number to reversed array of digits
function digitize(num) {
    return num.toString().split('').reverse().map(numberOfArray => Number(numberOfArray)) 
  }

//17 task
//[8 kyu]
// Abbreviate a Two Word Name Sam Harris => S.H / patrick feeney => P.F

function abbrevName(name){
    return name.split(' ').map((testName => testName.slice(0,1).toUpperCase())).join('.')
}

//18 task
//[8 kyu]
// Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0) {
          return [];
      }

    let finalArray = [];
    finalArray.push(input.filter(num => num > 0).length);
    finalArray.push(input.filter(num => num < 0).reduce((sum, num) => sum + num, 0));
  
    return finalArray
  }

//19 task
//[8 kyu]
// Beginner - Lost Without a Map
function maps(x){
    return x.map(num => num*2)
}

//20 task
//[8 kyu]
// Convert a String to a Number!
const stringToNumber = function(str){
    return Number(str);
}

//21 task
//[8 kyu]
// Calculate average
function findAverage(array) {
    return array.length > 0 ? array.reduce((sum, num) => sum + num, 0) / array.length : 0
}

//22 task
//[8 kyu]
// Returning Strings
function greet(name){
    return `Hello, ${name} how are you doing today?`
}

//23 task
//[8 kyu]
// Reversed sequence 5 --> [5, 4, 3, 2, 1]
const reverseSeq = n => {
    return Array.from({length: n}, ((num,i) => i+1)).reverse()
};

//24 task
//[8 kyu]
// Count the Monkeys! 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function monkeyCount(n) {
    return Array.from({length: n}, ((num, index) => index + 1));
}

//25 task
//[8 kyu]
// You only need one - Beginner
function check(a, x) {
    return a.includes(x)
}

//26 task
//[8 kyu]
// Is he gonna survive?
function hero(bullets, dragons){
    return bullets / 2 >= dragons
}
  
//27 task
//[8 kyu]
// Array plus array
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(...arr2).reduce((sum, num) => sum + num, 0 )
}

//28 task
//[8 kyu]
// Beginner - Reduce but Grow [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x){
    return x.reduce((sum, num) => sum * num, 1)
}

//29 task
//[7 kyu]
// Descending Order/ Дано число, надо расставить цифры этого числа по убыванию
function descendingOrder(num){
    return Number(num.toString().split('').sort((a, b) => b - a).join(''));
}

//30 task
//[7 kyu]
// Mumbling accum("abcd") -> "A-Bb-Ccc-Dddd" / accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
function accum(str) {
    let finalArr = [];
	let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
        let finalLetter = arr[i];
        
        for (let j = 0; j < i; j++) {
            finalLetter += arr[i].toLowerCase();
        }
        finalArr.push(finalLetter)
    }

    return finalArr.join('-')
}

//30 task
//[7 kyu]
// Mumbling accum("abcd") -> "A-Bb-Ccc-Dddd" / accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy" - теперь знаю про метод repeat();
function accum(str) {
	return str.split('').map((letter, index) => (letter.toUpperCase() + letter.toLowerCase().repeat(index)) ).join('-')
}

//31 task
//[7 kyu]
// Get the Middle Character

function getMiddle(str) {
  return str.length % 2 == 0 ? str.slice(str.length / 2 - 1, str.length / 2 + 1) : str.slice(Math.floor(str.length / 2), Math.floor(str.length / 2) + 1)
}

//32 task
//[7 kyu]
// Isograms "Dermatoglyphics" = true // "moose" = false
function isIsogram(str){
    let arr = str.toLowerCase().split('')
    let unicArr = [];
   
    arr.forEach(element => {
        if (!unicArr.includes(element)) {
            unicArr.push(element)
        }
    });
    
    return arr.length == unicArr.length
}

//33 task
//[7 kyu]
// List Filtering, just numbers

function filter_list(list) {
    return list.filter(item => typeof item == "number")
}

//34 task
//[7 kyu]
// Exes and Ohs (дают строку, должны сравнить количество "о" и количество 'x' в строке)
function XO(str) {
   let arr = str.toLowerCase().split('')

   let countX = arr.filter(item => item == 'x');
   let countO = arr.filter(item => item == 'o');

   return countX.length == countO.length
}

//35 task
//[7 kyu]
// Simple, given a string of words, return the length of the shortest word(s).
function findShort(string) {
    let arrLengths = []
    string.split(' ').forEach(element => {
        arrLengths.push(element.length)
    });

    return Math.min(...arrLengths)
}

//еще можно эту 35 задачу решить через map
function findShort(string) {
   return Math.min(...string.split(' ').map(item => item.length))
}

//36 task
//[7 kyu]
// Beginner Series #3 Sum of Numbers
function getSum( start,stop ) {
    const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

    let min = Math.min(a, b);
    let max = Math.max(a, b);

    return range(min, max, 1).reduce((sum, num) => sum + num, 0)
}


//37 task
//[7 kyu]
// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
    let newArr = numbers.sort((a, b) => a - b)
    return newArr[0] + newArr[1]
}

//38 task
//[8 kyu]
// Lario and Muigi Pipe Problem
function pipeFix(numbers){
    const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

    let min = Math.min(...numbers);
    let max = Math.max(...numbers);

    return range(min, max, 1)
}

//39 task
//[8 kyu]
// Welcome!

function greet(language) {
  
	switch(language){
    case "english": return "Welcome";
    case "czech": return "Vitejte";
    case "danish": return "Velkomst";
    case "dutch": return "Welkom";
    case "estonian": return "Tere tulemast";
    case "finnish": return "Tervetuloa";
    case "flemish": return "Welgekomen";
    case "french": return "Bienvenue";
    case "german": return "Willkommen";
    case "irish": return "Failte";
    case "italian": return "Benvenuto";
    case "latvian": return "Gaidits";
    case "lithuanian": return "Laukiamas";
    case "polish": return "Witamy";
    case "spanish": return "Bienvenido";
    case "swedish": return "Valkommen";
    case "welsh": return "Croeso";
    default: return "Welcome";
    }
  
}