class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.onResolveCallbacks = [];
        this.onRejectCallbacks = [];

        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onResolveCallbacks.forEach((callback) => callback(value));
            }
        };

        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.value = reason;
                this.onRejectCallbacks.forEach((callback) => callback(reason));
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        if (this.state === 'fulfilled') {
            return new MyPromise((resolve, reject) => {
                try {
                    const result = onFulfilled(this.value);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
        }

        if (this.state === 'rejected') {
            return new MyPromise((resolve, reject) => {
                try {
                    const result = onRejected(this.value);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
        }

        if (this.state === 'pending') {
            return new MyPromise((resolve, reject) => {
                this.onResolveCallbacks.push((value) => {
                    try {
                        const result = onFulfilled(value);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                });

                this.onRejectCallbacks.push((reason) => {
                    try {
                        const result = onRejected(reason);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                });
            });
        }
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }
}

const test = () => {
    const promise = new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve('成功');
            // reject('失败');
        }, 1000);
    });

    promise
        .then((result) => {
            console.log('成功:', result);
            return '新的值';
        })
        .then((result) => {
            console.log('链式调用:', result);
        })
        .catch((error) => {
            console.error('失败:', error);
        });

}
