/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var intMax = 2147483647;
    var intMin = -2147483648;
    
    if (x === 0){
        return 0;
    }
    
    var reverseX = parseInt(x.toString().split("").reverse().join(""));
    
    if (x < 0){
        reverseX *= -1;
    }
    if (reverseX > intMax || reverseX < intMin){
        return 0;
    }

    return reverseX;
    
};
