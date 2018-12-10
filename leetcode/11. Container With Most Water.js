/**
 * @param {number[]} height
 * @return {number}
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 */
// var maxArea = function (height) {
//     var len = height.length
//     var max = 0

//     for (var i = 0; i < len; i++) {
//         for (var j = len - 1; j > i; j--) {
//             var area = Math.min(height[i], height[j]) * (j - i)
//             if (area > max) {
//                 max = area
//             }
//             if (height[j] >= height[i]) {
//                 continue
//             }
//         }
//     }
//     return max
// };

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

// var maxArea = function (height) {
//     var len = height.length
//     var max = 0
//     var i = 0
//     var j = len - 1
//     while (i < j) {
//         var area = Math.min(height[i], height[j]) * (j - i)
//         if (area > max) {
//             max = area
//         }
//         if (height[j] >= height[i]) {
//             i++
//         }else{
//             j--
//         }
//     }

//     return max
// };

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

let maxArea = function (height) {
    let i = max = 0
    let j = height.length - 1
    while (i < j) {
        max = Math.max(max, Math.min(height[i], height[j]) * (j - i))

        height[j] >= height[i] ? i++ : j--
    }

    return max
};