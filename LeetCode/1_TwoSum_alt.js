/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {    
    let result = new Map()
    
    for (let i = 0; i < nums.length; i++){
        let index = result.get(target - nums[i])
        if (index !== undefined && index !== nums.length - 1){ return [index, i] }
        result.set(nums[i], i)
    }
};
