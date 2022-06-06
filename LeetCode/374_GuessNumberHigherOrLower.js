/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let start = 1, end = n;
    
    if (start === end){ return start; }
    if (guess(start) === 0){ return start; }
    if (guess(end) === 0){ return end; }
    
    while (start <= end){
        let meanNum = Math.floor((start + end) / 2)
        let guessNum = guess(meanNum);

        if (guessNum === 0){ return meanNum; }
        if (guessNum > 0){ start = meanNum + 1; }
        if (guessNum < 0){ end = meanNum - 1; }
    }  
    
    return -1;
};
