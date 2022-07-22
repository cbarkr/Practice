/*
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

function rotLeft(a, d) {
    // Write your code here
    
    d %= a.length
    a.reverse()
    
    let start = a.slice(0, a.length-d).reverse()
    let end = a.slice(a.length-d, a.length).reverse()
    let res = []
    
    start.forEach(e => res.push(e))
    end.forEach(e => res.push(e))
    
    a = res
    return a
}
