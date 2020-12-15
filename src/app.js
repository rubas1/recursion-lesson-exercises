/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(n) {
  if(n === 1){
    return n
  }
  return n*findFactorial(n-1)
}

//Exercise 2
const reverseString = function(str, n) {
  if(n === 1){
    return str[0]
  }
  return str[n-1] + reverseString(str, n-1)
}

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1, arr2) {
  if(arr1.length === 0){
    return 
  }
  arr2.push(arr1[0])
  arr1.shift()
  return swap(arr1, arr2)
}

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }