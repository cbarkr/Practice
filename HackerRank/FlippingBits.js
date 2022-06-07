/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    // Write your code here
    let bitString = (n).toString(2).padStart(32, "0")
    let flippedBitString = ""
    
    for (let i = 0; i < bitString.length; i++){
        flippedBitString += bitString[i] == "0" ? "1" : "0"
    }
    
    return parseInt(flippedBitString, 2)
}
