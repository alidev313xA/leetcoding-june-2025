/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
// O(n) solution 
var distributeCandies = function(n, limit) {
    let ways = 0; 

    // for child1 
    let minCh1 = Math.max(0, n - 2 * limit); 
    let maxCh2 = Math.min(n, limit); 

    for (let i = minCh1; i <= maxCh2; i++) { // fixing the candies assignment for child 1 
        let N = n - i; // remaining cadies to be assigned to chil 2 & 3 
        
        let minCh2 = Math.max(0, N - limit);
        let maxCh2 = Math.min(N, limit); 

        ways += maxCh2 - minCh2 + 1;  
    }

    return ways; 
};
