//8 kyu Filter out the geese
// return an array containing all of the strings in the input array except those that match strings in geese

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
     return  birds.filter(bird => !geese.includes(bird,0))
    // return an array containing all of the strings in the input array except those that match strings in geese
  };
  gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])