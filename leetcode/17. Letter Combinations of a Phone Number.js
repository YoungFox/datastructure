/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let map = {
        '0': [' '],
        '1': ['*'],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    function add(arr1, arr2) {
        if (!arr1.length || !arr2.length) {
            return arr1 || arr2
        }
        let tmpArr = []

        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                tmpArr.push(arr1[i] + arr2[j])
            }
        }
        return tmpArr
    }
    function getStringArr(numbers) {
        if (!numbers) {
            return []
        }
        let len = numbers.length
        let mid = Math.floor(len / 2)

        if (map[numbers]) {
            return map[numbers]
        }
        map[numbers] = add(getStringArr(numbers.slice(0, mid)), getStringArr(numbers.slice(mid, len)))
        return map[numbers]
    }

    return getStringArr(digits)
};
console.log(letterCombinations(''))