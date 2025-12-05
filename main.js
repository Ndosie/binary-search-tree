import { Tree } from "./binary_search_tree.js";

const nums = []

for (let i = 1; i <= 15; i++) {
    nums.push(Math.floor(Math.random() * 101))
}

const tree = new Tree(nums)

tree.prettyPrint(tree.root)
console.log(tree.isBalanced(tree.root))
let traversal = []
tree.levelOrderForEach(tree.root, (data) => traversal.push(data))
console.log(traversal)
traversal = []
tree.inOrderForEach(tree.root, (data) => traversal.push(data))
console.log(traversal)
traversal = []
tree.preOrderForEach(tree.root, (data) => traversal.push(data))
console.log(traversal)
traversal = []
tree.postOrderForEach(tree.root, (data) => traversal.push(data))
console.log(traversal)
traversal = []

tree.insert(tree.root, 110)
tree.insert(tree.root, 105)
tree.insert(tree.root, 150)
tree.insert(tree.root, 200)
tree.prettyPrint(tree.root)

console.log(tree.isBalanced(tree.root))
tree.rebalance()
console.log(tree.isBalanced(tree.root))
tree.prettyPrint(tree.root)

tree.levelOrderForEach(tree.root, (data) => traversal.push(data))
console.log(traversal)
traversal = []
tree.inOrderForEach(tree.root, (data) => traversal.push(data))
console.log(traversal)
traversal = []
tree.preOrderForEach(tree.root, (data) => traversal.push(data))
console.log(traversal)
traversal = []
tree.postOrderForEach(tree.root, (data) => traversal.push(data))
console.log(traversal)
traversal = []