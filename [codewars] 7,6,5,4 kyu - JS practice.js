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