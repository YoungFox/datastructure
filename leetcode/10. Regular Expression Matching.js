/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function (s, p) {
//     let match = false
//     if (!p) {
//        return !s
//     }

//     if (s && (s[0] === p[0] || p[0] === '.')) {
//         match = true
//     } else {
//         match = false
//     }

//     let match1 = false

//     if (p[1] === '*') {
//         match1 = isMatch(s.slice(0), p.slice(2)) || (match && isMatch(s.slice(1), p))
//     } else {
//         match1 = match && isMatch(s.slice(1), p.slice(1))
//     }
//     return match1
// };

// console.log(isMatch("mississippi", "mis*is*p*."))


var isMatch = function (s, p) {
    let memo = []
    let len = Math.max(s.length, p.length)
    for (let x = 0; x < len + 1; x++) {
        memo.push([])
    }
    function dp(i, j, s, p) {
        if (j > p.length - 1) {
            return i > (s.length - 1)
        }
        let firstMatch = false
        if (memo[i][j]) {
            firstMatch = true
        } else {
            let match = !!(s[i] == p[j] || (s[i] && p[j] == '.'))
            // let match = 1
            firstMatch = match
            memo[i][j] = match
        }

        if (j + 1 < p.length && p[j + 1] == '*') {
            return firstMatch && dp(i + 1, j, s, p) || dp(i, j + 2, s, p)
        }
        return firstMatch && dp(i + 1, j + 1, s, p)
    }

    return dp(0, 0, s, p)
};

console.log(isMatch("mississippi", "mis*is*p*."))