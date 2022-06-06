/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = 0;
    let temp;
    
    for (let i = arr.length-1; i >= 0; i--){
        temp = arr[i];
        arr[i] = max;
        max = Math.max(temp, max);
    }
    
    arr[arr.length-1] = -1;
    
    return arr;
};
