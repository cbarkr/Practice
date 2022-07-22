/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroCount = 0
    
    var swap = (nums, a, b) => {
        let temp = nums[a]
        nums[a] = nums[b]
        nums[b] = temp
    }
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== 0){
            swap(nums, i, nonZeroCount)
        }        
    }
};
