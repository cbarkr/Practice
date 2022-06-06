/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Write your code here
    // Create resultant array with same length as input array
    let res = new Array(100).fill(0);
    
    for (let i = 0; i < arr.length; i++){
        // Increment count for each occurence of number in arr
        res[arr[i]]++
    }
    
    return res
}
