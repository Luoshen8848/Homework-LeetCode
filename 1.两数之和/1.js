function twoSum(nums, target) {
    const numIndices = new Map(); // 创建一个哈希表

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // 计算所需的数

        // 检查 complement 是否在哈希表中
        if (numIndices.has(complement)) {
            return [numIndices.get(complement), i]; // 返回下标
        }

        // 将当前数字及其下标存入哈希表
        numIndices.set(nums[i], i);
    }

    // 如果没有结果，返回空数组（理论上不应该发生）
    return [];
}

// 测试示例
console.log(twoSum([2, 7, 11, 15], 9)); // 输出: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // 输出: [1, 2]
console.log(twoSum([3, 3], 6));         // 输出: [0, 1]
