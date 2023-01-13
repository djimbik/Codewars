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

//та же задача, только через регулярку

const decode = $ => $.replace(/[a-z]/g, x=> "zyxwvutsrqponmlkjihgfedcba"['abcdefghijklmnopqrstuvwxyz'.indexOf(x)])

