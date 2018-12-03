/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
* 二分查找法
* 时间复杂度O(logn)
*/
var findMedianSortedArrays = function (nums1, nums2) {
    var m = nums1.length || 0
    var n = nums2.length || 0
    var i, j

    if (m > n) {
        [m, n] = [n, m];
        [nums1, nums2] = [nums2, nums1];
    }
    var iMin = 0;
    var iMax = m;

    while (iMin <= iMax) {
        i = Math.floor((iMin + iMax) / 2)
        j = Math.floor((m + n + 1) / 2 - i)
        if (i > 0 && nums1[i - 1] > nums2[j]) {
            // i太大
            iMax = i - 1
            continue
        } else if (i < m && nums2[j - 1] > nums1[i]) {
            // i太小
            iMin = i + 1
            continue
        } else {
            var maxLeft;
            var minRight;
            if (i === 0) {
                maxLeft = nums2[j - 1]
            } else if (j === 0) {
                maxLeft = nums1[i - 1]
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1])
            }
            if ((m + n) % 2 === 1) {
                return maxLeft
            }

            if (i === m) {
                minRight = nums2[j]
            } else if (j === n) {
                minRight = nums1[i]
            } else {
                minRight = Math.min(nums1[i], nums2[j])
            }
            return (maxLeft + minRight) / 2
        }
    }
};

var x = findMedianSortedArrays([1, 2], [3, 4]);
console.log(x)