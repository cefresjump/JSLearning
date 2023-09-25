/*
防抖：某一函数执行后数秒才执行内容，如果中途再次执行则重新计时
节流：某一函数触发后数秒才能再次执行该函数
善用闭包实现
*/
function debounce(func, delay) {
    const timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, arguments);
        }, delay)
    }
}

function throttle(func, delay) {
    const isColdDown = false;
    return function () {
        if (!isColdDown) {
            func.apply(this, arguments);
            isColdDown = true;
            setTimeout(() => {
                isColdDown = false;
            }, delay)
        }
    }
}
