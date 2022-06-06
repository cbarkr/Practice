/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
    // Iterate over rows
    for (let i = 0; i < grid.length; i++){
        // Sort each row
        grid[i] = grid[i].split('').sort().join('');
        
        if (i == 0){ continue; }
        
        // Iterate over cols
        for (let j = 0; j < grid[i].length; j++){
            // Return 'NO' if col elements unordered
            if (grid[i][j] < grid[i - 1][j]){
                return 'NO';
            }
        }
    }

    return 'YES';
}
