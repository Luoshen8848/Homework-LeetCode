function zigzagLevelOrder(root) {
    if (!root) return []; 

    const result = []; 
    const queue = [root]; 
    let leftToRight = true;  

    while (queue.length > 0) {
        const levelSize = queue.length; 
        const currentLevel = []; 

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); 
            if (leftToRight) {
                currentLevel.push(node.val); 
            } else {
                currentLevel.unshift(node.val);
            }

            // 将左右子节点添加到队列中
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(currentLevel); 
        leftToRight = !leftToRight; 
    }

    return result; 
}
