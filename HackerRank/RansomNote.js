/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine, note) {
    // Write your code here
    let map = new Map()
    let canReplicate = true
    
    // Build frequency map of strings in magazine
    for (let i = 0; i < magazine.length; i++){
        let count = map.get(magazine[i])
        map.set(magazine[i], count === undefined ? 1 : count + 1)
    }
    
    // Decrease count for each string needed for note
    // Add to map and set count to -1 if not in map
    for (let j = 0; j < note.length; j++){
        let count = map.get(note[j])
        map.set(note[j], count === undefined ? -1 : count - 1)
    }
    
    // Iterate over map
    // Cannot replicate if any count is negative
    map.forEach(
        (value, key) => {
            if (value < 0){ canReplicate = false; }
        }
    )
    
    console.log(canReplicate ? "Yes" : "No")
}
