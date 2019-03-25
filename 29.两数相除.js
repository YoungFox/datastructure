/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 *
 * https://leetcode-cn.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (17.59%)
 * Total Accepted:    9.4K
 * Total Submissions: 53.6K
 * Testcase Example:  '10\n3'
 *
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 
 * 示例 1:
 * 
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 * 
 * 说明:
 * 
 * 
 * 被除数和除数均为 32 位有符号整数。
 * 除数不为 0。
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。本题中，如果除法结果溢出，则返回 2^31 − 1。
 * 
 * 
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    const A = Math.pow(2, 31) - 1
    if (divisor === 0) {
        return A
    }
    let symbol = 1
    if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
        symbol = -1
    }

    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)

    if (divisor > dividend) {
        return 0
    }

    if (divisor == 1) {
        let res = dividend * symbol
        if (res > A) {
            res = A
        }
        if (res < -A - 1) {
            res = -A - 1
        }
        return res
    }

    let res = 0
    let add = 0

    while (add + divisor <= dividend) {
        res++
        add += divisor
        if (res >= A) {
            break
        }
    }

    return res * symbol
};

console.log(divide(-Math.pow(2, 31), 1))

