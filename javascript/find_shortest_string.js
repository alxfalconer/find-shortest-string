function findShortestString(arr) {
  // let shortest = arr[0]
  
  // for (i = 0; i < arr.length; i++) {
  //   if (arr[i].length < shortest.length) {
  //     return shortest = arr[i] 
  //   } 
  // }

  // return shortest

  return arr.reduce((previous, current) => 
    current.length < previous.length ? current : previous
  )
  
}
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
