/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let set = new Set(nums);
    
    if (nums.length < 3 || set.size < 3){ return Math.max(...nums); }
    
    nums.sort(function(a, b){return a-b});
    
    if (nums.length === 3 || set.size === 3){ return nums[0]; }
    
    let max = -Number.MAX_VALUE;
    let max2 = -Number.MAX_VALUE;
    let max3 = -Number.MAX_VALUE;
    
    for (let i = nums.length; i >= 0; i--){
        if (nums[i] > max){ max = nums[i]; }
        if (nums[i] > max2 && nums[i] < max){ max2 = nums[i]; }
        if (nums[i] > max3 && nums[i] < max2){ max3 = nums[i]; }
    }
    
    return max3;
};
