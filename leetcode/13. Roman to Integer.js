// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function (s) {

//     function getRoman() {
//         let I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
//         let X = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
//         let C = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
//         let M = ['', 'M', 'MM', 'MMM']
//         return M[Math.floor(s / 1000)] + C[Math.floor(s % 1000 / 100)] + X[Math.floor(s % 100 / 10)] + I[Math.floor(s % 10)]
//     }
//     let res = 0
//     for (let i = 0; i <= 3999; i++) {
//         if (getRoman(i) === s) {
//             res = i
//             break
//         }
//     }
//     return res
// };

// console.log(romanToInt(3999))


// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function (s) {
//     let x = [
//         ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
//         ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
//         ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
//         ['', 'M', 'MM', 'MMM']]
//     let res = ''
//     if (!s) {
//         return 0
//     }
//     for (let i = 0; i < x.length; i++) {
//         if (!s) {
//             break
//         }
//         let item = x[i]
//         if (s.slice(-2) == item[4]) {
//             res = 4 + res
//             s = s.slice(0, -2)
//             continue
//         }
//         for (let j = item.length - 1; j >= 0; j--) {
//             let item0 = item[j]
//             if (j == 4) {
//                 continue
//             }
//             if (j === 0) {
//                 res = 0 + res
//             }
//             if (s.slice(-item0.length) == item0) {
//                 res = j + res
//                 s = s.slice(0, -item0.length)
//                 break
//             }
//         }
//     }

//     return Number(res)
// };

// console.log(romanToInt("MDLXX"))

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const x = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let res = 0
    let len = s.length
    for (let i = 0; i < len; i++) {
        if (i == len - 1) {
            res += x[s[i]]
        } else {
            x[s[i]] >= x[s[i + 1]] ? res += x[s[i]] : res -= x[s[i]]
        }
    }
    return res
};

console.log(romanToInt(''))