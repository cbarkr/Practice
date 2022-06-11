/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    // Track count of each number occurence in map
    let map = new Map();
    let max = Math.max(...arr)
    let missing = [];
    
    // Iterate from lowest positive int to max possible int (max + k)
    for (let i = 1; i <= k + max; i++){
        // Set each counter to 0
        map.set(i, 0);
    }
    
    // Iterate over array
    for (let i = 0; i < arr.length; i++){
        // Increment counter for each occurence of number
        map.set(arr[i], map.get(arr[i]) + 1);
    }
    
    // Add missing elements to array
    map.forEach((value, key) => { if (value === 0){ missing.push(key) }});
    
    // Return kth missing number
    return missing[k-1];
};
