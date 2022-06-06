/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {    
    var bin = (num >>> 0).toString(2);
    var binNew = "";
    
    for (let i = 0; i < bin.length; i++){
        binNew += bin[i] === "1" ? "0" : "1"
    }
    
    return parseInt(binNew, 2);
};

