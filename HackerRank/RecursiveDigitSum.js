/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
    // Base case    
    if (n.length === 1 || k === 0){ return n; }
    
    // Sum digits in n string
    let sum = 0;
    for (let i = 0; i < n.length; i++){
        sum += parseInt(n[i]);
    }
    
    let temp = sum * k;
    
    let p = superDigit(temp.toString(), 1);
    
    return parseInt(p);
}
