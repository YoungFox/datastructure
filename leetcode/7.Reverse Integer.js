/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let positive = true;
    if (x < 0) {
        positive = false;
        x = Math.abs(x)
    }
    let tmpNumS = String(x).split('').reverse().join('')

    while (tmpNumS[0] === '0') {
        tmpNumS = tmpNumS.slice(1)
    }

    let tmpNum = Number(tmpNumS)
    let res = tmpNum
    if (!positive) {
        res = -res
    }

    if (res < -Math.pow(2, 31) || res > Math.pow(2, 31) - 1) {
        res = 0
    }

    return res
};