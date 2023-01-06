//8 kyu Filter out the geese [array]
// return an array containing all of the strings in the input array except those that match strings in geese

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
     return  birds.filter(bird => !geese.includes(bird,0))
    // return an array containing all of the strings in the input array except those that match strings in geese
  };
  gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])

//new 7kyu [array]
//You solution should return an array [smallest, minimumAbsent, largest]
// The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

function minMinMax(array) {
    const largest = Math.max(...array);
    const smallest = Math.min(...array);
     
    let minimumAbsent;
    
     for (let i = smallest; i < largest; i++) {
       if (!array.includes(i)) {
        minimumAbsent = i;
        return [smallest, minimumAbsent, largest]
       }
     };
}

console.log(minMinMax([-23, -22, 24]));

//new 7 kyu (filter method) [array]
//filter 4 letters names in array

function friend(friends){
  return friends.filter(friend => friend.length == 4)
}

//new 8 kyu [array]
// Each positive becomes negatives, and the negatives become positives.
function invert(array) {
  return array.map(num => num * (-1));
}

//new AddLength [8 kyu]
//"you will win" -->["you 3", "will 4", "win 3"]
function addLength(str) {
  let newArrayFromStr = str.split(' ').map(word => `${word} ${word.length}`);;

  return newArrayFromStr;
}

console.log(addLength('apple ban')) 

//new [7 kyu]
function smaller(nums) {
  let finalArr = []
  for (let i = 0; i < nums.length-1; i++) {
    let count = 0;
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++
      }
    }
    finalArr.push(count)
  }
  finalArr.push(0);
  return finalArr;
}

//эта же задача [7 kyu], но на методах массивов map, slice, filter
function smaller(nums) {
return nums.map((num, i) => nums.slice(i+1).filter(secondNum => num > secondNum).length)
}

console.log(smaller([5, 4, 3, 2, 1]));


//[7 kyu] Flatten
let flatten = function (array){
  let newArray = []
  for (let item of array) {
    if (typeof item === "number" ||  typeof item === "string") {
      newArray.push(item);
    } else {
      for (let subItem of item) {
        newArray.push(subItem);
      }
    }
  }
  return newArray
}

//[7 kyu] Flatten

let flatten1 = function (array){
  return [].concat(...array)
}