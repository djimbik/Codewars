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