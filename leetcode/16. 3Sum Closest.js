/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    let len = nums.length
    if (len < 3) {
        return 0
    }
    if (nums[0] === nums[len - 1]) {
        return nums[0] + nums[0] + nums[0]
    }
    let diff = Math.abs(target - (nums[0] + nums[1] + nums[2]))
    let result = nums[0] + nums[1] + nums[2]
    for (let i = 0; i < len - 2; i++) {
        let x = i + 1
        let y = len - 1
        while (x < y) {
            // 双指针
            let res = nums[i] + nums[x] + nums[y]
            let diff1 = target - res
            if (Math.abs(diff1) < diff) {
                diff = Math.abs(diff1)
                result = nums[i] + nums[x] + nums[y]
            }

            if (diff1 < 0) {
                y--
            } else if (diff1 === 0) {
                return res
            } else {
                x++
            }
        }
    }
    return result
};
console.log(threeSumClosest([1, 2, 3, 4, 5, 6], 1))