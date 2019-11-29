/**
 * 
 * runtime: 2^n 指数级
 * @param {number} n 
 */
function fib(n) {
    let fValue = undefined;
    if (n <= 2) return fValue = 1;
    else {
        fValue = fib(n - 1) + fib(n -2);
    }
    return fValue;
}

/**
 * memo
 * runtime: O(n)
 * @param {number} n 
 */
function fib1(n) {
    let fValue = undefined;
    const memo = {};
    if (Object.keys(memo).indexOf(n) !== -1) return memo[n];
    if (n <= 2) return fValue = 1;
    else {
        fValue = fib1(n - 1) + fib1(n - 2);
    }
    memo[n] = fValue;
    return memo[n]
}

/**
 * bottom-up approach
 * runtime: O(n)
 * @param {number} n 
 */
function fib2(n) {
    const memo = {};
    let fValue = undefined;
    for (let i = 1; i <= n; i++) {
        if (i <= 2) fValue = 1;
        else {
            fValue = memo[i - 1] + memo[i - 2];
        }
        memo[i] = fValue;
    }
    return memo[n];
}

/**
 * 
 * runtime: O(lgn)
 * @param {number} n 
 */
function fib3(n) {

}

console.log(fib(7));
console.log(fib1(7));
console.log(fib2(7));