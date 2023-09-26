/*
快速排序是分治策略之一
原理：
选取一个数，将小于它的数字移到它的左边，大的放在右边，并对两侧进行同样的操作
选取策略可以是固定选择第一个数，亦或者随机选择一个
*/
export function quickSort(nums, left, right) {
    if (left >= right) {
        return;
    }

    const rand = getRandom(left, right);
    swap(nums, left, rand);
    const pivot = nums[left];
    let i = left + 1;
    let j = right;

    while (i <= j) {
        while (i <= j && nums[i] <= pivot) {
            i++;
        }
        while (i <= j && nums[j] >= pivot) {
            j--;
        }
        if (i <= j) {
            swap(nums, i, j);
        }
    }
    swap(nums, left, j);

    quickSort(nums, left, j - 1);
    quickSort(nums, j + 1, right);
}

function swap(nums, left, right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const test = () => {
    const array = [1, 4, 2, 3, 5];
    console.log(array);
    quickSort(array, 0, array.length - 1);
    console.log(array);
}

test()