var subarraySum = function(nums, k) {
    const n = nums.length;
    const s = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        s[i + 1] = s[i] + nums[i];
    }

    let ans = 0;
    const cnt = new Map();
    for (const sj of s) {
        ans += cnt.get(sj - k) ?? 0;
        cnt.set(sj, (cnt.get(sj) ?? 0) + 1);
    }
    return ans;
};