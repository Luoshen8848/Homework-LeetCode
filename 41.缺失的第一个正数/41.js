function firstMissingPositive(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // 交换 nums[i] 和 nums[nums[i] - 1]
            const temp = nums[i];
            nums[i] = nums[temp - 1];
            nums[temp - 1] = temp;
        }
    }

    // 查找第一个缺失的正整数
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return n + 1;
}

// 测试示例
console.log(firstMissingPositive([1, 2, 0]));        // 输出: 3
console.log(firstMissingPositive([3, 4, -1, 1]));     // 输出: 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 输出: 1
