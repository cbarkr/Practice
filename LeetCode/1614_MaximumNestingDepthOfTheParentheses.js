/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    if (s.length <= 1){ return 0 }
    if (s === "()"){ return 1 }
    
    let maxDepth = 0
    let parenthesesCount = 0
    
    for (let i = 0; i < s.length; i++){        
        if (s[i] === "("){ parenthesesCount++ }
        else if (s[i] === ")"){             
            if (s[i-1] !== "(") { parenthesesCount-- }
        }
        
        if (parenthesesCount > maxDepth){ maxDepth = parenthesesCount }
    }
    
    return maxDepth
};
