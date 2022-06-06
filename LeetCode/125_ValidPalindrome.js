/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var sCharOnly = s.replace(/[^\w\s]|\s+|_/g, "").toLowerCase();
    var sCharOnlyReverse = sCharOnly.split("").reverse().join("");
    
    if (sCharOnly == sCharOnlyReverse){
        return true;
    }
    
    return false;
};
