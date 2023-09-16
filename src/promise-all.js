function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedCount = 0;

        if (promises.length === 0) {
            resolve(results);
            return;
        }

        function handleCompletion(index, value) {
            results[index] = value;
            completedCount++;

            if (completedCount === promises.length) {
                resolve(results);
            }
        }

        for (let i = 0; i < promises.length; i++) {
            promises[i]
                .then((result) => {
                    handleCompletion(i, result);
                })
                .catch((error) => {
                    reject(error);
                });
        }
    });
}

const test = () => {
    const promise1 = Promise.resolve(1);
    const promise2 = Promise.resolve(2);
    const promise3 = Promise.resolve(3);

    myPromiseAll([promise1, promise2, promise3])
        .then((results) => {
            console.log('成功:', results); // 输出成功: [1, 2, 3]
        })
        .catch((error) => {
            console.error('失败:', error);
        });
}