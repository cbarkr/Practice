/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    if (num <= 1){ return 0 }
    
    let count = 0
    
    for (let i = 1; i <= num; i++){
        // Split int into string digit array
        let temp = i.toString().split('')
        
        // Convert string digits back to int
        temp = temp.map((a) => parseInt(a))
        
        // Sum digits and increment count if sum is even
        if ((temp.reduce(function(total, elem){ return total + elem }, 0)) % 2 === 0){ count++ } 
    }
    
    return count
};
