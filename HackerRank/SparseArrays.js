/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    // Write your code here
    let res = new Array(queries.length)
    
    for (let i = 0; i < queries.length; i++){
        res[i] = 0
        for (let j = 0; j < strings.length; j++){
            if (queries[i] === strings[j]){
                res[i] += 1;
            }
        }
    }
    
    return res
}
