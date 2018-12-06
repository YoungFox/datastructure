// var isPalindrome = function(x) {
//     x = String(x)
//     var res = true
//     if(x<0){
//         return !res
//     }

//     var i =0
//     var j = x.length-1
//     while(i<=j){
//         if(x[i] == x[j]){
//             i++
//             j--
//             continue
//         }else{
//             return !res
//         }
//     }
//     return res
// };

// console.log(isPalindrome(19283))


// var isPalindrome1 = function(x) {
//     var res = true
//     if(x<0){
//         return !res
//     }
//     x = String(x)
//     s = x.split('').reverse().join('')

//     if(x !== s){
//         res = false
//     }
//     return res
// };

// console.log(isPalindrome1(-1))

//0
// var isPalindrome2 = function(x) {
//     var res = true
//     if(x<0){
//         return !res
//     }
//     x = String(x)
//     let len = x.length
//     let i = Math.floor(len/2)

//     var x1 = ''
//     var x2 = ''

//     if(len%2 == 0){
//         x1 = x.slice(0,i)
//         x2 = x.slice(i)
//     }else{
//         x1 = x.slice(0,i)
//         x2 = x.slice(i+1)
//     }

//     x2 = x2.split('').reverse().join('')

//     if(x1 !== x2){
//         res = false
//     }
//     return res
// }

// console.log(isPalindrome2())

// 121
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false
    }
    var y = 0

    while (x > y) {
        y = y * 10 + (x % 10)
        x = Math.floor(x / 10)
    }
    return x === y || x === Math.floor(y / 10)
};

console.log(isPalindrome(121))