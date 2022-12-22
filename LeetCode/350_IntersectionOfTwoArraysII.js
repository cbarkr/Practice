/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let numsMap = new Map()
    let intersection = []
    
    for (let i = 0; i < nums1.length; i++){
        let numsCount = numsMap.get(nums1[i])
        numsMap.set(nums1[i], !numsCount ? 1 : numsCount+1)
    }
    
    for (let j = 0; j < nums2.length; j++){
        let numsCount = numsMap.get(nums2[j])
        if (numsCount && numsCount > 0){
            intersection.push(nums2[j])
            numsMap.set(nums2[j], numsCount-1)
        }
    }
    
    return intersection
};
