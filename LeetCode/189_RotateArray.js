/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let numsLen = nums.length;
    
    if (numsLen <= 1){ return; }
    
    k %= numsLen;
    
    var reverseArr = function(nums, start, end){
        if (start >= end){ return; }
        
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        
        reverseArr(nums, start + 1, end - 1);
    }
    
    reverseArr(nums, 0, numsLen - 1);
    reverseArr(nums, 0, k - 1);
    reverseArr(nums, k, numsLen - 1);
};
