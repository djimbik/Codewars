//8 kyu Filter out the geese
// return an array containing all of the strings in the input array except those that match strings in geese

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
     return  birds.filter(bird => !geese.includes(bird,0))
    // return an array containing all of the strings in the input array except those that match strings in geese
  };
  gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])

//new 
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