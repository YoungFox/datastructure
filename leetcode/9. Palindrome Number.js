var isPalindrome = function(x) {
    x = String(x)
    var res = true
    if(x<0){
        return !res
    }

    var i =0
    var j = x.length-1
    while(i<=j){
        if(x[i] == x[j]){
            i++
            j--
            continue
        }else{
            return !res
        }
    }
    return res
};

console.log(isPalindrome(19283))