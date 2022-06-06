/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let numsLen = nums.length;
    if (numsLen === 0){ return 0; }
    
    for (let i = 0; i < numsLen; i++){
        if (nums[i] === target){
            return i;
        }
        
        else if (nums[i] > target){
            if (i >= 1 && nums[i-1] < target){
                return i;
            }
        }
        
        else if (nums[i] < target){
            if (i == numsLen - 1){
                return i + 1;
            }
        }
    }
    
    return 0;
};
