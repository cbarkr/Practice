/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1, s2) {
    // Write your code here
    let map = new Map()
    
    // Build frequency map for characters in s1
    for (let i = 0; i < s1.length; i++){
        let count = map.get(s1[i])
        map.set(s1[i], !count ? 1 : count + 1)
    }
    
    // If any character in s2 is in the map, return immediately
    for (let j = 0; j < s2.length; j++){
        let count = map.get(s2[j])
        if (count){ return "YES" } 
    }
    
    return "NO"
}
