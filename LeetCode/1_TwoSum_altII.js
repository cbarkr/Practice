/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsMap = new Map()
    
    for (let i = 0; i < nums.length; i++){
        let count = numsMap.get(target - nums[i])
        if (count){
            return [nums.indexOf(target-nums[i]), i]
        }
        
        numsMap.set(nums[i], count+1)
    }
    
    return []
};
