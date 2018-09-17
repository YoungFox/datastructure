/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var map = {};
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        map[nums[i]] = i;
    }
    for (var j = 0; j < len; j++) {
        var res = target - nums[j];
        if (map[res] && map[res] !== j) {
            return [j, map[res]]
            break;
        }
    }
};

console.log(twoSum([-1,2,4,6,2],5))
