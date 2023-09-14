/*
数组去重
*/
function toUniqueInES6(arr) {
    return [...new Set(arr)];
}

function toUnique(arr) {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}

const test = () => {
    const arr = [1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 6];
    const result1 = toUniqueInES6(arr);
    const result2 = toUnique(arr);
    console.log(arr);
    console.log(result1);
    console.log(result2);
}

test()