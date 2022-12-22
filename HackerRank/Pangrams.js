/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Write your code here
    
    // Remove spaces and convert to lower case
    s = s.toLowerCase().trim().replace(/ /g, "")
    
    let map = new Map()
    
    for (let i = 0; i < s.length; i++){
        let count = map.get(s[i])
        map.set(s[i], count ? count+1 : 1)
    }
    
    if (map.size !== 26){ return "not pangram" }
    
    return "pangram"
}
