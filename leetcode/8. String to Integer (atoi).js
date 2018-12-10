/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    var possitive = 1
    var res = 0
    var hasNum = false
    var hasChar = false

    while (str.length) {
        if (/[^0-9+-\s]/.test(str[0])) {
            break
        } else {
            if (/[0-9]/.test(str[0])) {
                hasNum = true
                res = res * 10 + Number(str[0])
                str = str.slice(1)
                continue
            } else {
                if (hasNum || hasChar) {
                    break
                } else {
                    if (str[0] === '-') {
                        possitive = 0
                        hasChar = 1
                    } else if (str[0] === '+') {
                        possitive = 1
                        hasChar = 1
                    }
                    str = str.slice(1)
                    continue
                }
            }
        }
    }

    res =  possitive ? res : -res
    var max = Math.pow(2,31) - 1
    var min = -Math.pow(2,31)
    if(res > max){
        res = max
    }
    if(res < min){
        res = min
    }

    return res
};

console.log(myAtoi('0-12a'))