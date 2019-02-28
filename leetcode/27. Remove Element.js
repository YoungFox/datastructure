/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let len = nums.length
    let j = 0
    for (let i = 0; i < len; i++) {
        if (nums[j] != val) {
            j++
        }
        nums[j] = nums[i + 1]
    }
    return j
};

console.log(removeElement([1,1,2,3,4],2))
// 1,2,3,4,1,1,1

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let len = nums.length
    let j = 0
    for (let i = 0; i < len; i++) {
        if (nums[i] != val) {
            nums[j] = nums[i]
            j++
        }
    }
    return j
};