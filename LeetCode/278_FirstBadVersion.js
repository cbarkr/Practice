/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (isBadVersion(1)){ return 1; }
        
        let start = 1;
        let end = n;
        
        while (start < end){
            let mid = parseInt(start + (end - start)/2);
            if (!isBadVersion(mid)){ start = mid + 1; }
            else { end = mid; }
        }
        
        return start;
    };
};
