/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xString = x.toString()
    let xStringLen = xString.length
    
    let first = xString.slice(0, xStringLen / 2)
    
    // Even length
    if (xStringLen % 2 === 0){
        let second = xString.slice(xStringLen / 2)
        return first === second.split('').reverse().join('')
    }

    // Odd length
    let second = xString.slice(xStringLen / 2 + 1)
    return first === second.split('').reverse().join('')
};
