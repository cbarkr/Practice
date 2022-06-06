/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let curr = 0;
    let max = 0;
    
    for (let i = 0; i < nums.length; i++){
        max = Math.max(max, curr += nums[i]);
        
        if (nums[i] === 0){ curr = 0; }
    }
    
    return max;
};
