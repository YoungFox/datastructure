/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let len = nums.length
    if (!len) {
        return 0
    }

    for (let i = 0; i < len; i++) {
        if(nums[i] === undefined){
            break
        }
        if (nums[i] == nums[i + 1]) {
            nums.splice(i, 1)
            i--
            continue
        }
    }

    return nums.length
};

console.log(removeDuplicates([0,1,1,3]))