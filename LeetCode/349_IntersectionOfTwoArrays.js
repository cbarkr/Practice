/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let nums1Set = new Set(nums1)
    let nums2Set = new Set(nums2)
    let intersection = []
    
    nums1Set.forEach(
        (value, key) => {
            if (nums2Set.has(key)){ intersection.push(key) }
        }
    )
    
    return intersection
};
