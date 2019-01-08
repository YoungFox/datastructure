/**
 * @param {number} n
 * @return {string[]}
 *  [
        "((()))",
        "(()())",
        "(())()",
        "()(())",
        "()()()"
    ]
    [
        "((()))",
        "()(())",
        "()()()",
        "(()())",
        "(())()"
    ] 
 */
var generateParenthesis = function (n) {
    let res = []

    function x(ss) {
        if (ss.length > 2 * n || !v(ss)) {
            return
        }
        if (v(ss) && ss.length == 2 * n) {
            res.push(ss)
        }
        x(ss + '(')
        x(ss + ')')
    }

    function v(sss) {
        let r = 0
        let len = sss.length
        for (let i = 0; i < len; i++) {
            let item = sss[i]
            if (item == '(') {
                r++
            } else {
                r--
            }
            if (r < 0) {
                return false
            }
        }
        if (len == 2 * n && r != 0) {
            return false
        }
        return true
    }

    x('')

    return res
};
console.log(generateParenthesis(1))