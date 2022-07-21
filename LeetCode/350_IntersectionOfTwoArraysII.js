/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = new Map()
    let res = []
    
    // Iterate over elements in first array
    for (let i = 0; i < nums1.length; i++){
        // Check if current element already exists
        let count = map.get(nums1[i])
        // Increment count if it does exist, otherwise assign count of 1
        map.set(nums1[i], count !== undefined ? count+1 : 1)
    }
    
    // Iterate over elements in second array
    for (let j = 0; j < nums2.length; j++){
        // Check if current element exists in first array, push to result if true
        let count2 = map.get(nums2[j])
        if (count2 === 1){ res.push(nums2[j]) }
        else if (count2 > 1){ 
            
        }
    }
    
    return res
};
