/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    var sarr = s.split(" "); // Split by spaces
    var diff = sarr.length - k;
    
    for (let i = 0; i < diff; i++){
        sarr.pop();    
    }
    
    var struncated = sarr.join(" "); // Join truncated array with spaces in between
    
    return struncated;
};
