// /**
//  * @param {number} num
//  * @return {string}
//  */
// var intToRoman = function (num) {
//     let x = {
//         10: {
//             1: 'I',
//             5: 'V'
//         },
//         100: {
//             1: 'X',
//             5: 'L'
//         },
//         1000: {
//             1: 'C',
//             5: 'D'
//         },
//         10000: {
//             1: 'M'
//         },
//     }

//     let res = ''
//     let i = 10

//     while (i < 10001) {
//         let y = Math.floor(num % i / (i / 10))
//         let tmpS = ''
//         if (y < 4) {
//             for (let j = 1; j <= y; j++) {
//                 tmpS = tmpS + x[i]['1']
//             }
//         } else if (y == 4) {
//             tmpS = x[i]['1'] + x[i]['5']
//         } else if (y == 5) {
//             tmpS = x[i]['5']
//         } else if (y > 5 && y <= 8) {
//             tmpS = x[i]['5']
//             for (let a = 6; a <= y; a++) {
//                 tmpS = tmpS + x[i]['1']
//             }
//         } else if (y == 9) {
//             tmpS = x[i]['1'] + x[i * 10]['1']
//         }
//         res = tmpS + res
//         i = i * 10
//     }
//     return res
// };
// console.log(intToRoman(3000))

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let x = {
        10: {
            1: 'I',
            5: 'V',
            e: 'IIII'
        },
        100: {
            1: 'X',
            5: 'L',
            e: 'XXXX'
        },
        1000: {
            1: 'C',
            5: 'D',
            e: 'CCCC'
        },
        10000: {
            1: 'M',
            e: 'MMMM'
        },
    }

    let res = ''
    let i = 10
    let b = 'IIII'

    while (i < 10001) {
        let y = Math.floor(num % i / (i / 10))
        let tmpS = ''
        if (y < 4) {
            tmpS = tmpS + x[i]['e'].substr(0, y)
        } else if (y == 4) {
            tmpS = x[i]['1'] + x[i]['5']
        } else if (y == 5) {
            tmpS = x[i]['5']
        } else if (y > 5 && y <= 8) {
            tmpS = x[i]['5']
            tmpS = tmpS + x[i]['e'].substr(0, y - 5)
        } else if (y == 9) {
            tmpS = x[i]['1'] + x[i * 10]['1']
        }
        res = tmpS + res
        i = i * 10
    }
    return res
};
console.log(intToRoman(31))