/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return squareElems(nums).sort(comparison);
};

var squareElems = function(nums) {
    for (var i = 0; i < nums.length; i++){ nums[i] = nums[i] * nums[i]; }
    return nums;
}

var comparison = function(a, b) {
    if (a === b) return 0;

    return a > b ? 1 : -1;
}
