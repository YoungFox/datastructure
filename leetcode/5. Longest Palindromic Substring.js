// var longestPalindrome = function (s) {
//     let ss = s.split('').reverse().join('')
//     let res = []
//     let longest = {
//         len: 0,
//         i: 0,
//         j: 0
//     }
//     let sL = s.length
//     let ssL = ss.length

//     for (let i = 0; i <= sL; i++) {
//         res[i] = []
//         for (let j = 0; j <= ssL; j++) {
//             if (i === 0 || j === 0) {
//                 res[i][j] = 0
//             } else {
//                 if (s[i - 1] === ss[j - 1]) {
//                     res[i][j] = res[i - 1][j - 1] + 1
//                     let sStart = i - res[i][j]
//                     let sEnd = i - 1

//                     let ssStart = ssL - j
//                     let ssEnd = ssL - (j - res[i][j]) - 1

//                     // console.log(res[i - 1][j - 1],i,j)
//                     if (res[i][j] > longest.len && sStart == ssStart && sEnd == ssEnd) {
//                         longest.len = res[i][j]
//                         longest.i = i
//                         longest.j = j
//                     }
//                 } else {
//                     res[i][j] = 0
//                 }
//             }
//         }
//     }
//     return s.slice(longest.i - longest.len, longest.i)
// };
// console.log(longestPalindrome('cbbd'))


// 直接动态规划
var longestPalindrome = function (s) {
    let len = s.length
    let longest = 0
    let start = 0
    let end = 0
    for (let i = 0; i < len; i++) {
        let x = i + 1
        let y = i - 1
        // 奇数回文
        while (x >= 0 && y < len) {
            if (s[x - 1] && s[y + 1] && s[x - 1] === s[y + 1]) {
                let tmpLen = y + 1 - x + 1 + 1
                if (tmpLen > longest) {
                    longest = tmpLen
                    start = x - 1
                    end = y + 2
                }
                x--
                y++
            } else {
                break
            }
        }

        let a = i
        let b = i + 1
        // 偶数
        while (a >= 0 && b < len) {
            if (s[a] === s[b]) {
                let tmpLen = b - a + 1
                if (tmpLen > longest) {
                    longest = tmpLen
                    start = a
                    end = b + 1
                }
                a--
                b++
            } else {
                break
            }
        }
    }
    return s.slice(start, end)
};
console.log(longestPalindrome('absssssssba'))