/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let leftDiagSum = 0;
    let rightDiagSum = 0;
    let arrLen = arr.length;
    
    for (let i = 0; i < arrLen; i++){
        leftDiagSum += arr[i][i];
        rightDiagSum += arr[i][(arrLen - 1) - i];
    }
    
    return Math.abs(leftDiagSum - rightDiagSum);
}
