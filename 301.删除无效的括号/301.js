function removeInvalidParentheses(s) {
    const results = new Set();
    
    // 检查字符串是否有效
    const isValid = (str) => {
        let count = 0;
        for (const char of str) {
            if (char === '(') count++;
            if (char === ')') count--;
            if (count < 0) return false; // 右括号多于左括号
        }
        return count === 0; // 左右括号相同
    };

    // BFS 寻找所有有效的组合
    const bfs = (s) => {
        const queue = [s];
        let found = false;  // 改为 let 以支持后续赋值
        let level = 0; // 当前的层级

        while (queue.length > 0) {
            const currentLevelSize = queue.length; // 当前层级的大小
            for (let i = 0; i < currentLevelSize; i++) {
                const current = queue.shift();
                // 如果当前字符串有效，添加到结果中
                if (isValid(current)) {
                    results.add(current);
                    found = true; // 找到了有效的字符串
                }
                // 如果已经找到有效的字符串，则不需要继续生成更多的组合
                if (found) continue;

                // 生成所有可能的字符串
                for (let j = 0; j < current.length; j++) {
                    // 只对括号进行处理
                    if (current[j] === '(' || current[j] === ')') {
                        // 生成新的字符串
                        const next = current.slice(0, j) + current.slice(j + 1);
                        queue.push(next);
                    }
                }
            }
            // 如果已经找到有效的字符串，停止生成下一层
            if (found) break;
        }
    };

    bfs(s);
    return Array.from(results);
}

// 测试用例
console.log(removeInvalidParentheses("()())()")); // 输出可能为: ['(())()', '()()()']
console.log(removeInvalidParentheses("(a)())()")); // 输出可能为: ['(a())()', '(a)()()']
console.log(removeInvalidParentheses(")("));       // 输出: ['']
