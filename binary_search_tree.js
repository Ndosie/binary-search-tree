class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class Tree {
    constructor(items) {
        this.items = Array.from(new Set(items)).sort((a, b) => a - b)
        console.log(this.items)
        this.root = this.buildTree(this.items, 0, this.items.length - 1)
    }

    buildTree(items, start, end) {
        if (start > end) return null
        const mid = Math.floor((start + end) / 2)
        const root = new Node(items[mid])

        root.left = this.buildTree(items, start, mid - 1)
        root.right = this.buildTree(items, mid + 1, end)

        return root
    }

    prettyPrint(node, prefix = '', isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    };

    insert(root, value) {
        if (root === null) {
            return new Node(value)
        }
        if (value < root.data) {
            root.left = this.insert(root.left, value)
        } else {
            root.right = this.insert(root.right, value)
        }
        return root
    }

    delete(root, value) {
        if (root.data === value) {
            if (root.left === null && root.right === null){
                root = null
            } else if (root.left && root.right) {
                let leftNode = root.right.left
                while (leftNode.left) {
                    leftNode = leftNode.left
                }
                root.data = leftNode.data
                root.right = this.delete(root.right, leftNode.data)
            } else {
                root = root.left ? root.left : root.right
            }
            return root
        }

        if (value < root.data) {
            root.left = this.delete(root.left, value)
        } else {
            root.right = this.delete(root.right, value)
        }
        return root
    }

    find(root, value) {
        if (root === null) {
            return null
        }
        if (root.data === value) {
            return root
        }
        let found = null
        if (value < root.data) {
            found = this.find(root.left, value)
        } else {
            found = this.find(root.right, value)
        }
        return found ? found : "Not found"
    }

    levelOrderForEach(root, callback) {
        if (typeof callback !== 'function') throw new Error('Callback function is required!')
        
        if (!root) return

        const queue = [root]
        while (queue.length) {
            const n = queue.shift()
            callback(n.data)
            if (n.left) queue.push(n.left)
            if (n.right) queue.push(n.right)
        }
    }

    inOrderForEach(root, callback) {
        if (typeof callback !== 'function') throw new Error('Callback function is required!')

        if (!root) return
        this.inOrderForEach(root.left, callback)
        callback(root.data)
        this.inOrderForEach(root.right, callback)
    }

    preOrderForEach(root, callback) {
        if (typeof callback !== 'function') throw new Error('Callback function is required!')

        if (!root) return
        callback(root.data)
        this.preOrderForEach(root.left, callback)
        this.preOrderForEach(root.right, callback)
    }

    postOrderForEach(root, callback) {
        if (typeof callback !== 'function') throw new Error('Callback function is required!')
        
        if (!root) return
        this.postOrderForEach(root.left, callback)
        this.postOrderForEach(root.right, callback)
        callback(root.data)
    }

    depth(value) {
        let count = -1
        
        let node = this.root
        while (node) {
            count++
            if (value === node.data) return count
            if (value < node.data) {
                node = node.left
            } else {
                node = node.right
            }
        }
        return null
    }

    findHeight(root){
        if (!root) return -1

        const left_height = 1 + this.findHeight(root.left)
        const right_height = 1 + this.findHeight(root.right)
        return Math.max(left_height, right_height)
    }

    height(value) {
        let node = this.root

        while (node) {
            if (value === node.data) return this.findHeight(node)

            if (value < node.data) {
                node = node.left
            } else {
                node = node.right
            }
        }
        return null
    }

    isBalanced(root) {
        const left_height = this.findHeight(root.left)
        const right_height = this.findHeight(root.right)
        if (right_height - left_height > 1 || right_height - left_height < -1) {
            return false
        }

        if (root.right) this.isBalanced(root.right)
        
        if (root.left) this.isBalanced(root.left)

        return true
    }
     
    rebalance() {
        const sorted_nums = []
        this.inOrderForEach(this.root, function(data) {
            sorted_nums.push(data)
        })
        this.root = this.buildTree(sorted_nums, 0, sorted_nums.length - 1)
    }
}


export { Tree }