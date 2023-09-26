/*
缓存是一种在计算机科学和信息技术领域中广泛使用的技术，
用于临时存储数据以加快后续访问这些数据的速度。
缓存的基本思想是将经常访问的数据或计算结果存储在快速访问的位置，
以减少从原始数据源（通常是较慢的存储介质或计算过程）获取数据的次数。
这可以显著提高应用程序的性能和响应时间。
*/
function memoize(func) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args); // 通过参数生成唯一的缓存键

        if (cache[key] === undefined) {
            // 如果缓存中没有结果，则调用原始函数并缓存结果
            cache[key] = func(...args);
        }

        return cache[key];
    };
}

const test = () => {
    // 使用示例
    function expensiveOperation(n) {
        console.log(`Calculating for ${n}`);
        return n * 2;
    }

    const memoizedExpensiveOperation = memoize(expensiveOperation);

    console.log(memoizedExpensiveOperation(5)); // 第一次计算并缓存结果
    console.log(memoizedExpensiveOperation(5)); // 直接从缓存中获取结果，避免重复计算
    console.log(memoizedExpensiveOperation(10)); // 计算并缓存新的结果
    console.log(memoizedExpensiveOperation(10)); // 直接从缓存中获取结果
}

test()