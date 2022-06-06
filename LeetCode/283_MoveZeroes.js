/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    
    var swapVals = function(nums, a, b){
        var temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== 0){
            swapVals(nums, i, count);
            count++;
        }
    }
};
