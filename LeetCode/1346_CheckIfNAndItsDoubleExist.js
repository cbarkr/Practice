/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let map = new Map();
    
    for (let i = 0; i < arr.length; i++){
        if (i > 0){
            map.set(arr[i-1], i-1);
        }
        
        if (map.get(2 * arr[i])){ 
            return true;
        }
        
        if (arr[i] % 2 == 0){
            if (map.get((arr[i]/2))){
                return true;
            }
        }
    }
    
    return false;
};
