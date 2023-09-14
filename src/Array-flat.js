/*
将嵌套数组展开成只有一层的数组
*/

function flatten(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

const test = () => {
    const arr = [1, [2, [3]]];
    console.log(arr);
    console.log(flatten(arr));
}

test()