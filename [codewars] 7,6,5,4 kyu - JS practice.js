//1 task
//[7 kyu]
// Descending Order
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}

//2 task
//[7 kyu]
// Count strings in objects 

function strCount(obj){
let sum = 0;
 for (let key in obj) {
   if (typeof obj[key] == "string") {
     sum += 1
   } else if (typeof obj[key] == "object") {
    sum += strCount(obj[key])
   }
 }
 return sum
}


//3 task
//[7 kyu]
// Count strings in objects 

function decode(message){
    let arrOfMess =  message.split('')
    let alfabet = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
    let newAlfabet = []
    for (let i = 0; i < alfabet.length; i++) {
        newAlfabet.push(alfabet[alfabet.length - i - 1]);
        
    }

    let finalArr = []

    for (let i = 0; i < arrOfMess.length; i++) {
        if (arrOfMess[i] === ' ') {
            finalArr.push(' ')
        }
        for (let j = 0; j < alfabet.length; j++) {
            if (arrOfMess[i] == alfabet[j]) {
                finalArr.push(newAlfabet[j])
            } 
            
        }
        
    }

 return finalArr.join('')
}

//та же задача, только через regexp

const decode = $ => $.replace(/[a-z]/g, x=> "zyxwvutsrqponmlkjihgfedcba"['abcdefghijklmnopqrstuvwxyz'.indexOf(x)])


//4 task
//[7 kyu]
// Whose bicycle?

  function whoseBicycle(diary1, diary2, diary3) {
    let diaries = [diary1, diary2, diary3]
    const son = {
      0: 'first',
      1: 'second',
      2: 'third'
    };
    
  let scores = diaries.map(diary => {
      let values = Object.values(diary)
      
    return values.reduce((sum, currentNum) => sum + currentNum, 0)
    })
  
  const maxScores = Math.max(...scores)
  
  const whosTheWinner = scores.lastIndexOf(maxScores);
  
  return `I need to buy a bicycle for my ${son[whosTheWinner]} son.`
}

//5 task
//[7 kyu]
// Dominant array elements
function solve(arr){
    let currentArr = arr.map((num,index) => arr.slice(index+1).filter(secondNum => num <= secondNum).length)
    //сравнить этот массив и массив ниже и где 0 внести цифры в новый массив
   return arr.filter((num, index) => currentArr[index] == 0)
  };
console.log(solve([16,17,14,3,14,5,2]))

// решение еще проще может быть: 
function solve(arr){
    return arr.filter((e,i)=> arr.slice(i+1).every(x => x < e));
  };
  
//6 task
//[7 kyu]
// Inertial Array

function isInertial(array) {
  let finalArr = []
  if (array.filter(num => num % 2 != 0).length) {
    finalArr.push(true)
  }
  if (Math.max(...array) % 2 == 0) {
      finalArr.push(true)
  }

    let newArr = array.sort( (a, b) => b - a)
    newArr.shift();
    let newArrOdd = newArr.filter(num => num % 2 != 0)
    let newArrEven = newArr.filter(num => num % 2 == 0)

    if( Math.min(...newArrOdd) > Math.max(...newArrEven)) {
      finalArr.push(true)
    }

   if (finalArr.length == 3) {
      return true
   } else {
    return false
   }
  } 

isInertial([11, 4, 20, 9, 2, 8])

// та же задача

let isInertial = arr => {
  var max = Math.max(...arr);
  var odds = arr.filter(e => e % 2 != 0);
  var evens = arr.filter(e => e % 2 == 0 && e != max);
  return arr.some(e => e % 2 != 0) && max % 2 == 0 && odds.every(o => evens.every(e => e <= o));
}

//7 task
//[7 kyu]
// Tally it up

let scoreToTally = function(score){
  let totalScores = {
    1: 'a',
    2: 'b', 
    3: 'c',
    4: 'd',
    5: 'e'
  }
  let str = '';
  while (score > 10) {
    str += totalScores[5] + ' ' + '<br>';
    score = score - 5;
  } 
  if (score < 5) {
    str += totalScores[score]
  } else if (score == 5) {
    str += totalScores[score] + ' ' + '<br>'
  } else if (score - 5 < 5) {
    str += totalScores[5] + ' ' + '<br>' + totalScores[score - 5]
  } else if (score - 5 == 5) {
    str += totalScores[5] + ' ' + '<br>' + totalScores[score - 5] + ' ' + '<br>'
  } 
  return str
}

//8 task
//[7 kyu]
// Initialize my name // Alice Betty Catherine Davis -> Alice B. C. Davis

function initializeNames(name){
  return name.replace(/ (\w)\w*(?= )/g, ' $1.') // тут пробел -> первая скобка - это как раз первая буква второго слова, потом слово, потом опять пробел - изи
}

//еще 
name.replace(/(?<=\s)(\w)\w+(?=\s)/g, `$1.`);


//9 task
//[7 kyu]
// Credit Card Mask // "4556364607935616" --> "############5616"
function maskify(cc) {
  return cc.length <= 4 ? cc :  cc.replace(cc.slice(0,-4), '#'.repeat(cc.slice(0,-4).length))
}

//еще с помощью regexp

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

//еще

function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
}


//10 task
//[7 kyu]
// Find the nth Digit of a Number // 5673, 4 --> 5 (from right to left)

var findDigit = function(num, nth){
  let newNum = num.toString().split('').reverse();

  if (nth > newNum.length) {
    return 0
  }
  if (nth <= 0) {
    return -1
  }

  return Number(newNum[nth-1]) ? Number(newNum[nth-1]) : 0
}

findDigit(5673, 4)

//11 task
//[7 kyu]
// Highest and Lowest highAndLow("1 2 3 4 5");  // return "5 1"
function highAndLow(numbers){
  let arr = numbers.split(' ');
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  return `${max} ${min}`
}

//12 task
//[7 kyu]
// Complementary DNA

function DNAStrand(dna){
  const rep = {
    A: `T`,
    T: `A`,
    G: `C`,
    C: `G`
  };
  
  return dna.replace(/(A|T|G|C)/g, (str, $1) => rep[$1])
}

//13 task
//[7 kyu]
// Digit*Digit
function squareDigits(num){
  return Number(num.toString().split('').map((item) => Number(item)**2).join(''));
}

//14 task
//[7 kyu]
// Odd-Even String Sort // assert.strictEqual(sortMyString("CodeWars"), "CdWr oeas");
function sortMyString(S) {
  let arr =  S.split('')
  let evenPart = arr.filter((letter, index) => index % 2 == 0).join('')
  let oddPart = arr.filter((letter, index) => index % 2 != 0).join('')
  return `${evenPart} ${oddPart}`;
}

//15 task
//[7 kyu]
// Regex validate PIN code
function validatePIN (pin) {
  return /(?<!(.|\n))(\d{6}|\d{4})(?!(.|\n))/.test(pin)
}
//оптимизируем
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

//16 task
//[7 kyu]
// Categorize New Member

function openOrSenior(data){
  let newArr = [];
  data.forEach(items => items[0] >= 55 && items[1] > 7 ? newArr.push('Senior') : newArr.push('Open'))
  return newArr
}
// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

//17 task
//[7 kyu]
// Hide password from jdbc url

function hidePasswordFromConnection(urlString){
  return urlString.replace(/(?<=password=)(.+)(?=\&user)|(?<=password=)(.+)/, (str) => str.split('').map(item => item = '*').join(''))
}

//рефакторим
function hidePasswordFromConnection(urlString){
  return urlString.replace(/\bpassword=([^&]*)/, (m,p) => 'password=' + '*'.repeat(p.length))
}

//18 task
//[7 kyu]
// Basic JS - Calculating averages
var Calculator = {
  average: function(...nums) {
    return nums.length == 0 ? 0 : num.reduce((sum, current) => sum + current, 0)/nums.length
  }
};

// еще интересный вариант
var Calculator = {
  average: function() {
    
   return Array.prototype.slice.call(arguments).reduce(function(prev, next) {
     return prev + next;
   }, 0) / (arguments.length || 1);
  }
};

//19 task
//[7 kyu]
// Largest 5 digit number in a series

function solution(digits){
  let finalArr = [];
  let arrDigits = digits.split('')

  for (let i = 0; i < arrDigits.length; i++) {
   let arrNums = arrDigits.slice(i, i+5)
   let finalNum = arrNums.join('')
   finalArr.push(finalNum)
  }
  return Math.max(...finalArr)
}

//20 task
//[7 kyu]
// String ends with?
function solution(str, ending){
  return str.endsWith(ending)
}

//21 task
//[7 kyu]
// Don't give me five!
function dontGiveMeFive(start, end) {
  let arr = [];
  for (let i = start; i <= end; i ++) {
    if  (i.toString().includes('5') == false) {
      arr.push(i)
    } 
  }
  return arr.length ;
}

//22 task
//[7 kyu]
// Find the stray number

function stray(numbers) {
  console.log(numbers)
  let uniqNum = numbers[0];
  console.log(uniqNum)
   if (uniqNum != numbers[1]) {
     uniqNum = numbers[1];
     console.log(numbers[1])
     if (uniqNum == numbers[2]) {
       uniqNum = numbers[0];
     }
   } else if (uniqNum == numbers[1] && uniqNum == numbers[2]) {
    uniqNum = numbers.find(item => item != numbers[0])
   } else {
    uniqNum = numbers[2]
   }

  return uniqNum;
}
stray([2, 1, 1])

//рефакторим

const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

//23 task
//[7 kyu]
// Find the stray number

var number = function(array) {
  return array.map((item, index) => `${index + 1}: ${item}`);
}

//24 task
//[6 kyu]
// Sentence Calculator

function lettersToNumbers(s) {
  let alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   
   let arrOfNums = s.split('').map(letter => {
     if (/^[A-Z]*$/.test(letter)) {
       return (alfabet.indexOf(letter.toLowerCase()) + 1) * 2
     } else if (/^[0-9]*$/.test(letter)) {
       return Number(letter)
     } else {
      return (alfabet.indexOf(letter) + 1)
    }
   })

  return arrOfNums.reduce((sum, num) => sum + num, 0)
}

// решение регуляра, которое мне понравилось 
function lettersToNumbers(s) {
  let key = c =>
    /[a-z]/.test(c) ? c.charCodeAt() - 96 :
    /[A-Z]/.test(c) ? (c.charCodeAt() - 64) * 2 :
    /\d/.test(c) ? +c : 0
  return [...s].reduce((s, v) => s + key(v), 0)
}

//25 task
//[6 kyu]
// Validate Credit Card Number Luhn algorithm

function validate(n){
  let arrNums = n.toString().split('').reverse();
  for (let i = 1; i < arrNums.length; i += 2) {
    if (arrNums[i] * 2 > 9) {
      arrNums[i] = arrNums[i] * 2 - 9;
    } else {
      arrNums[i] *= 2;
    }
  }
  return arrNums.reduce((sum, num) => sum + Number(num), 0) % 10 == 0 ? true : false 
}

// элегантное решение от регуляров
function validate(n){
  var sum = 0;

  while (n > 0) {
    var a = n % 10;
    n = Math.floor(n / 10);
    
    var b = (n % 10) * 2;
    n = Math.floor(n / 10);
    
    if (b > 9) {
      b -= 9;
    }
    
    sum += a + b;
  }
  
  return sum % 10 == 0;
}

//26 task
//[6 kyu]
// Persistent Bugger.

function persistence(num) {
  let times = 0;
  
  num = num.toString();
  
  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }
  
  return times;
}

persistence(999)

//27 task
//[6 kyu]
// Equal Sides Of An Array

function findEvenIndex(arr)
{
  let finalArr = [];
  if (arr.slice(0, arr.length - 1).reduce((sum, num) => sum + num, 0) == 0) {
    finalArr.push(arr.length - 1);
  }
  
  if (arr.slice(1).reduce((sum, num) => sum + num, 0) == 0) {
    finalArr.push(0);
  }

  for (let i = 0; i < arr.length - 1 ; i++) {
    if (arr.slice(0, i).reduce((sum, num) => sum + num, 0) == arr.slice(i+1).reduce((sum, num) => sum + num)) {
       finalArr.push(i)
    }
  }
  return finalArr.length == 0 ? -1 : Math.min(...finalArr);
}


//28 task
//[6 kyu]
// Sum of Digits / Digital Root

function digitalRoot(n) {
  let arr = n.toString().split('');
  let nextNum = arr.reduce((sum, num) => sum + Number(num), 0).toString().split('');

  return nextNum.length > 1 ? digitalRoot(Number(nextNum.join(''))) : Number(nextNum.join(''))
}

// оптимизировал

function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce((acc, d) =>  acc + +d, 0));
}

//29 task
//[6 kyu]
// Playing with digits

function digPow(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}

//30 task
//[6 kyu]
// Statistics for an Athletic Association

function stat(strg) {
  let arr = strg.split(', ')

  let newArr = arr.map(time => {
    let parts = time.split("|");
    return (parts[0] * 3600) +
           (parts[1] * 60) +
           (+parts[2]);
  })

  newArr.sort((a, b) => a - b)

  let range = newArr[newArr.length - 1] - newArr[0];

  let median;
  if (newArr.length % 2 == 0) {
    median = (newArr[Math.floor(newArr.length / 2)] + newArr[Math.floor(newArr.length / 2) - 1]) / 2
  }  else {
    median = newArr[Math.floor(newArr.length / 2)]
  }
  median = Math.floor(median)

  let average = Math.floor(newArr.reduce((sum, item) => sum + item, 0) / newArr.length)

  function pad(num) {
    if(num < 10) {
      return "0" + num;
    } else {
      return "" + num;
    }
  }
  
  function formatTime(seconds) {
    return [pad(Math.floor(seconds/3600)),
            pad(Math.floor(seconds/60)%60),
            pad(seconds%60),
            ].join("|");
  }

  return `Range: ${formatTime(range)} Average: ${formatTime(average)} Median: ${formatTime(median)}`
}

stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17")


//31 task
//[6 kyu]
// Your order, please
function order(words){
  let arr = words.split(' ')
  
  let finalArr = []
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j ++) {
      if (arr[j].includes(i+1)) {
        finalArr.push(arr[j])
      }
    }
  }
  return finalArr.join(' ')
}

// через регулярки и сорт

function order(words){

  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}  

//32 task
//[6 kyu]
// Duplicate Encoder

function duplicateEncode(word){
  let arr = word.toLowerCase().split('')
  
  let finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    let m = 0;
    for (let j = 0; j < arr.length; j++ ) {
        if (arr[i] == arr[j]) {
          m++;
        }  
    }
    m > 1 ? finalArr.push(')') : finalArr.push('(')
  }
  return finalArr.join('')
}

//крутое решение

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

//33 task
//[6 kyu]
// Does my number look big in this?

function narcissistic(value) {
  let degree = value.toString().split('').length;
  return value.toString().split('').reduce((sum, num) => sum + Number(num)**degree, 0) == value
}

//34 task
//[6 kyu]
// Take a Ten Minutes Walk

function isValidWalk(walk) {
  //insert brilliant code here
 return walk.length == 10 &&
  walk.filter(letter => letter == 'e').length == walk.filter(letter => letter == 'w').length &&
  walk.filter(letter => letter == 'n').length == walk.filter(letter => letter == 's').length 
}

//второе решение
function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
}