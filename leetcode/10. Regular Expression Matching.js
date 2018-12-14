/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let match = false
    if (!p) {
       return !s
    }

    if (s && (s[0] === p[0] || p[0] === '.')) {
        match = true
    } else {
        match = false
    }

    let match1 = false

    if (p[1] === '*') {
        match1 = isMatch(s.slice(0), p.slice(2)) || (match && isMatch(s.slice(1), p))
    } else {
        match1 = match && isMatch(s.slice(1), p.slice(1))
    }
    return match1
};

console.log(isMatch("mississippi", "mis*is*p*."))