/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    if (arr.indexOf(0) === -1){ return; }
    
    let i = 0, dupCount = 0
    
    while (i < arr.length){
        if (arr[i] === 0){
            arr.splice(i, 0, 0)
            arr.pop()
            i++
        }
        
        i++
    }
};
