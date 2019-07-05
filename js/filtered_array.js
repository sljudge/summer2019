function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for(let i=0; i<arr.length; ++i){
    newArr.push(arr[i].filter(j => j!=elem));
  }
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));