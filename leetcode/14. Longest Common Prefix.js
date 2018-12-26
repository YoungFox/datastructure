/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(!strs.length){
        return ''
    }
    let minLen = strs[0].length
    for (let i = 1; i < strs.length; i++) {
        minLen = Math.min(minLen, strs[i].length)
    }

    if (minLen === 0) {
        return ''
    }
    let res = ''
    let x = 0
    while (x < minLen) {
        let tmpStr = strs[0][x]
        let match = true
        for (let y = 0; y < strs.length; y++) {
            if(tmpStr != strs[y][x]){
                match = false
                break
            }
        }
        if(match){
            res += tmpStr
        }else{
            break
        }
        x++
    }
    return res
};

console.log(longestCommonPrefix(['aa']))