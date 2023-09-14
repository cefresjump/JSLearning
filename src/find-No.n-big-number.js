<<<<<<< HEAD:src/find-No.n-big-Number.js
//给一个无序无重复数组nums和数字n，找出数组中第n大的元素，利用快排
//如果是有重复可以先去重
function findIndexByBigRank(nums, rank) {
    const target = nums.length - rank;
    return quickFind(nums, 0, nums.length - 1, target);
}

function quickFind(nums, left, right, target) {
    const rand = getRandom(left, right);
    swap(nums, rand, left);
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

    if (j === target) {
        return nums[target];
    } else if (j > target) {
        return quickFind(nums, left, j - 1, target);
    } else if (j < target) {
        return quickFind(nums, j + 1, right, target);
    }
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
    const origin = [4, 1, 8, 6, 7, 3, 5, 10];
    const nums = [...origin];
    const result = findIndexByBigRank(nums, 3);
    console.log(`No.3 big number is ${result}`);
}

test()
=======
//给一个无序数组nums和数字n，找出数组中第n大的元素，利用快排
>>>>>>> f2280aa86c1e5e981cf7b0176954b4fe4c3b473c:src/find-No.n-big-number.js
