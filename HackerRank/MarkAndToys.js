/*
 * Complete the 'maximumToys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER k
 */

function maximumToys(prices, k) {
    // Write your code here
    let sum = 0, count = 0, i = 0
    
    // Sort numerically in ascending order
    prices.sort(function(a, b){return a-b})
    
    while (sum <= k && (sum + prices[i]) <= k){
        sum += prices[i]
        count++
        i++
    }
    
    return count
}
