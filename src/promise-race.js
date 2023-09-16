function myPromiseRace(promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i]
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                });
        }
    });
}

const test = () => {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 500));
    const promise3 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 3 rejected'), 200));

    myPromiseRace([promise1, promise2, promise3])
        .then((result) => {
            console.log('第一个完成的 Promise 成功:', result); // 输出第一个完成的 Promise 成功: Promise 2 resolved
        })
        .catch((error) => {
            console.error('第一个完成的 Promise 失败:', error);
        });
}