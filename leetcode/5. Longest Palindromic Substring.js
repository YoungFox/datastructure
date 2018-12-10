var longestPalindrome = function (s) {
    let ss = s.split('').reverse().join('')
    let res = []
    let longest = {
        len: 0,
        i: 0,
        j: 0
    }
    let sL = s.length
    let ssL = ss.length

    for (let i = 0; i <= sL; i++) {
        res[i] = []
        for (let j = 0; j <= ssL; j++) {
            if (i === 0 || j === 0) {
                res[i][j] = 0
            } else {
                if (s[i - 1] === ss[j - 1]) {
                    res[i][j] = res[i - 1][j - 1] + 1
                    let sStart = i - res[i][j]
                    let sEnd = i - 1

                    let ssStart = ssL - j
                    let ssEnd = ssL - (j - res[i][j]) - 1

                    // console.log(res[i - 1][j - 1],i,j)
                    if (res[i][j] > longest.len && sStart == ssStart && sEnd == ssEnd) {
                        longest.len = res[i][j]
                        longest.i = i
                        longest.j = j
                    }
                } else {
                    res[i][j] = 0
                }
            }
        }
    }
    return s.slice(longest.i - longest.len, longest.i)
};
console.log(longestPalindrome('cbbd'))