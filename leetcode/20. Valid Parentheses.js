/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if(s == ''){
        return true
    }
    if (/[^\(\)\{\}\[\]]/g.test(s)) {
        return false
    }
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    let stack = []
    while (s.length) {
        let item = s[0]
        if (item == '(' || item == '[' || item == '{') {
            stack.push(item)
        } else {
            if (map[item] === stack[stack.length - 1]) { 
                stack.pop()
            }else{
                stack.push(item)
            }
        }
        s = s.slice(1)
    }

    return stack.length === 0
};

console.log(isValid(''))