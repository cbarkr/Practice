/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s) {
    // Write your code here
    let map = new Map()
    let commonFreq = 0, commonCount = 0
    let isValid = true
    
    // Populate frequency map
    for (let i = 0; i < s.length; i++){
        let count = map.get(s[i])
        map.set(s[i], !count ? 1 : count+1)
    }
    
    // Get count of first element in string
    commonFreq = map.get(s[0])
    
    // Iterate over counts, check if equal
    map.forEach(
        (value, key) => {
            if (value === commonFreq){ commonCount++ }
        }
    )
    
    return (commonCount === map.size || commonCount === (map.size -1)) ? "YES" : "NO"
}
