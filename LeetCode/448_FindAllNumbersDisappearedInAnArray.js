/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // Track count of each number occurence in map
    let map = new Map();
    let missingNums = [];
    
    // // Sort
    // nums.sort(function(a,b){return (a-b)});
    
    // Iterate from 1-n
    for (let i = 1; i <= nums.length; i++){
        // Set each counter to 0
        map.set(i, 0);
    }
    
    // Iterate over array
    for (let i = 0; i < nums.length; i++){
        // Increment counter for each occurence of number
        map.set(nums[i], map.get(nums[i]) + 1);
    }
    
    // Add missing elements to array
    map.forEach((value, key) => { if (value === 0){ missingNums.push(key) }});
    
    return missingNums;
};
