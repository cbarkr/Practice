/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let max = 0, maxIndex = 0
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
            maxIndex = i;
        }
    }
    
    return maxIndex
};
