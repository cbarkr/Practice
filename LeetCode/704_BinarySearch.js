/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {    
    let numsLen = nums.length
    
    for(let i = 0; i < numsLen; i++){
        if (nums[i] == target){
            return i
        }
    }
    
    return -1
};
