/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
    
    k %= 26;
    
    let A = 65;
    let Z = 90;
    let a = 97;
    let z = 122;
    let res = "";
    
    for (let i = 0; i < s.length; i++){
        let currChar = s.charCodeAt(i);
        
        if (currChar >= A && currChar <= Z){
            if (currChar + k > Z){
                currChar += A + (k - Z) - 1;
            }
            else {
                currChar += k;   
            }
        }
        
        else if (currChar >= a && currChar <= z){
            if (currChar + k > z){
                currChar += a + (k - z) - 1;
            }
            else {
                currChar += k;   
            }
        }
        
        res += String.fromCharCode(currChar);
    }
    
    return res;
}
