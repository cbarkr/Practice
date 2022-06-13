/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
    if (target === ""){ return 0 }
    
    let pairCount = 0
    let numMap = new Map()
    
    // Populate map
    for (let i = 0; i < nums.length; i++){
        numMap.set(i, nums[i])
    }
    
    // Iterate over digit strings
    for (let i = 0; i < nums.length; i++){
        // Iterate over map
        numMap.forEach((value, key) => {
            // Increment count if digit strings add together to target
            if (i !== key && nums[i] + value === target){ pairCount++ }
        })
    }
    
    return pairCount
};
