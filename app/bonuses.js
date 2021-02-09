// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
    // find first corresponding letter
    // check if next letter is in pattern
    // if yes, repeat. if no, insert it into string
}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let tryNum = arr[i]
        for (let j = 0; j < arr.length; j++) {
            if (tryNum + arr[j] == target) {
                return true
            }
        }
    }
    return false
}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
    arr_o = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            arr_o.push(arr[i])
            arr[i] = "x"
        }
    }
    arr_o.sort(function(a, b){return a-b})
    for (let i = 0; i < arr_o.length; i++) {
        arr[arr.indexOf("x")] = arr_o[i]
    }
    console.log(arr)
    return arr
}