/*
// 字符串反转动态规划
var longestPalindrome = function (s) {
    let ss = s.split('').reverse().join('')
    let res = []
    let longest = {
        len: 0,
        i: 0,
        j: 0
    }
    let sL = s.length
    let ssL = ss.length

    for (let i = 0; i <= sL; i++) {
        res[i] = []
        for (let j = 0; j <= ssL; j++) {
            if (i === 0 || j === 0) {
                res[i][j] = 0
            } else {
                if (s[i - 1] === ss[j - 1]) {
                    res[i][j] = res[i - 1][j - 1] + 1
                    let sStart = i - res[i][j]
                    let sEnd = i - 1

                    let ssStart = ssL - j
                    let ssEnd = ssL - (j - res[i][j]) - 1

                    // console.log(res[i - 1][j - 1],i,j)
                    if (res[i][j] > longest.len && sStart == ssStart && sEnd == ssEnd) {
                        longest.len = res[i][j]
                        longest.i = i
                        longest.j = j
                    }
                } else {
                    res[i][j] = 0
                }
            }
        }
    }
    return s.slice(longest.i - longest.len, longest.i)
};
console.log(longestPalindrome('cbbd'))
*/

// 中心扩散法
// var longestPalindrome = function (s) {
//     let len = s.length
//     let longest = 0
//     let start = 0
//     let end = 0
//     for (let i = 0; i < len; i++) {
//         let x = i + 1
//         let y = i - 1
//         // 奇数回文
//         while (x >= 0 && y < len) {
//             if (s[x - 1] && s[y + 1] && s[x - 1] === s[y + 1]) {
//                 let tmpLen = y + 1 - x + 1 + 1
//                 if (tmpLen > longest) {
//                     longest = tmpLen
//                     start = x - 1
//                     end = y + 2
//                 }
//                 x--
//                 y++
//             } else {
//                 break
//             }
//         }

//         let a = i
//         let b = i + 1
//         // 偶数
//         while (a >= 0 && b < len) {
//             if (s[a] === s[b]) {
//                 let tmpLen = b - a + 1
//                 if (tmpLen > longest) {
//                     longest = tmpLen
//                     start = a
//                     end = b + 1
//                 }
//                 a--
//                 b++
//             } else {
//                 break
//             }
//         }
//     }
//     return s.slice(start, end)
// };
// console.log(longestPalindrome('absssssssba'))

// // 动态规划
// var longestPalindrome = function (s) {
//     let len = s.length
//     let resArr = []
//     let res = {
//         longest: 0,
//         i: 0,
//         j: 0
//     }
//     for (let i = 0; i < len; i++) {
//         if (!resArr[i]) {
//             resArr[i] = []
//         }
//         resArr[i][i] = 1
//         if (s[i] == s[i + 1]) {
//             resArr[i][i + 1] = 2
//             if (2 > res.longest) {
//                 res.longest = 2
//                 res.i = i
//                 res.j = i + 1
//             }
//         }
//         if (1 > res.longest) {
//             res.longest = 1
//             res.i = i
//             res.j = i
//         }
//     }

//     for (let x = 3; x <= len; x++) {
//         for (let y = x; y <= len; y++) {
//             let start = y - x
//             let end = y - 1
//             if (s[start] === s[end] && resArr[start + 1][end - 1]) {
//                 resArr[start][end] = resArr[start + 1][end - 1] + 2
//                 if (resArr[start][end] > res.longest) {
//                     res.longest = resArr[start][end]
//                     res.i = start
//                     res.j = end
//                 }
//             }
//         }
//     }

//     return s.slice(res.i, res.j + 1)
// };
// console.log(longestPalindrome("cbbd"))


//  0123456
// '#a#b#a#'
//  0103010

// Manacher 算法
var longestPalindrome = function (s) {
    let P = []
    let res = {
        longest: 0,
        i: 0,
        j: 0,
        s: ''
    }

    s = s.split('').join('#')
    if (s) {
        s = '#' + s + '#'
    }
    let len = s.length

    let C = R = 0
    P[0] = 0

    for (let i = 1; i < len; i++) {
        let iMirror = 2 * C - i
        if (!P[iMirror]) {
            P[iMirror] = 0
        }

        if (P[iMirror] < R - i) {
            P[i] = P[iMirror]
        } else {
            P[i] = R - i
        }
        if (P[i] < 0) {
            P[i] = 0
        }

        while (i - P[i] > 0 && i + P[i] < len - 1) {
            if (s[i - P[i] - 1] === s[i + P[i] + 1]) {
                P[i]++
                if (P[i] > res.longest) {
                    res.s = s.slice(i - P[i], i + P[i] + 1).replace(/#/g, '')
                    res.longest = P[i]
                }
            } else {
                break
            }
        }

        if (i + P[i] > R) {
            C = i
            R = C + P[i]
        }
    }
    return res.s
};
console.log(longestPalindrome("cbbd"))