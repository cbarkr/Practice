/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    if (a.length === 0 || a === null){ return -1; }
    if (a.length === 1){ return a[0]; }
    
    let map = new Map()
    let res = 0
    
    for (let i = 0; i < a.length; i++){
        let count = map.get(a[i])
        map.set(a[i], count !== undefined ? count+1 : 1)
    }
    
    map.forEach(function(value, key){ if (value == 1){ res = key } })
    
    return res
}
