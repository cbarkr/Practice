/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let firstIndex = -1, lastIndex = -1
    
    for (let i = 0; i < nums.length; i++){
        if (firstIndex === -1 && nums[i] === target){ firstIndex = i }
        if (firstIndex !== -1 && nums[i] === target){ lastIndex = i }
    }
    
    return [firstIndex, lastIndex]
};
