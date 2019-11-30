
/**
 * 
 * recursion vs DP
 * 
 * @param {Array} num 
 * @param {number} sum 
 */
function subsetSumPro(num, sum) {
    let result = new Array(num.length);

    for (let i = 0; i < num.length; i++) {
        result[i] = new Array(sum);
        for (let j = 0; j < sum; j++) {
            if (j === 0) {
                result[i][j] = true;
                continue;
            }
            if (i === 0) {
                if (num[i] === j) {
                    result[i][j] = true;
                } else {
                    result[i][j] = false;
                }
            } else {
                if (num[i] > j) {
                    result[i][j] = result[i - 1][j]; 
                } else {
                    result[i][j] = result[i - 1][j - num[i]];
                }
            }    
        }
    }

    return result[num.length - 1][sum - 1];
}

function subsetSumProDP(num, sum) {

}


const res = subsetSumPro([2,3,7,8,10], 14);
console.log(res);