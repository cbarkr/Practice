/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    let maxSum = -63
    
    for (let i = 0; i < arr[0].length-2; i++){
        for (let j = 0; j < arr.length-2; j++){
            let hourglass = arr[i][j] + arr[i][j+1] + arr[i][j+2]
                                + arr[i+1][j+1]
                                + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            
            if (hourglass > maxSum){ maxSum = hourglass }
        }
    }
    
    return maxSum
}
