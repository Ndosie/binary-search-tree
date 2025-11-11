import { Tree } from "./binary_search_tree.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

tree.prettyPrint(tree.root)
tree.insert(tree.root, 20)
tree.prettyPrint(tree.root)
tree.delete(tree.root, 20)
tree.prettyPrint(tree.root)
tree.delete(tree.root, 5)
tree.prettyPrint(tree.root)
tree.insert(tree.root, 100)
tree.insert(tree.root, 150)
tree.prettyPrint(tree.root)
tree.delete(tree.root, 67)
tree.prettyPrint(tree.root)
console.log(tree.find(tree.root, 150))