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
    // check next corresponding index
    // if different, use as missing letter, if same, continue
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let startIndex = alphabet.search(str[0])
    for (let i = 1; i < str.length; i++) {
        if (alphabet[i+startIndex] != str[i]) {
            return alphabet[i+startIndex]
        }
    }
    return "no missing letters"
}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
    let tryNum
    // let numsTried = [] *** Collecting numsTried could save time, but could also lose time due to lack of duplicate nums in the randomly generated "bigArr"
    for (let i = 0; i < arr.length; i++) {
        tryNum = arr[i]
        // if (numsTried.indexOf(tryNum) == -1) {
        //     numsTried.push(tryNum)
        // } else {
        //     continue
        // }
        for (let j = i; j < arr.length; j++) {
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
    return arr
}