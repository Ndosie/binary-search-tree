# Binary Search Tree (JavaScript)

A small, educational implementation of a Binary Search Tree (BST) in JavaScript.

- **Purpose:** Learning data structures and tree traversal algorithms.
- **Language:** JavaScript (ES modules).

**Features:**
- Build a balanced BST from an array
- Insert, delete and find nodes
- In-order, pre-order, post-order and level-order traversals
- Height / depth calculations, balance check and rebalancing
- Pretty-print tree structure to the console

**Quick Start**

- Run the bundled example (requires Node.js):

```powershell
node main.js
```

- Import and use the `Tree` class in your own code:

```javascript
import { Tree } from './binary_search_tree.js'

const nums = [7, 3, 1, 5, 9, 8, 6]
const tree = new Tree(nums)
// print the tree
tree.prettyPrint(tree.root)

// traversals with callbacks
tree.inOrderForEach(tree.root, v => console.log(v))
tree.levelOrderForEach(tree.root, v => console.log(v))
```

Notes:
- Traversal methods accept a callback function that is called for each visited node.
- Some methods expect a `root` argument (for example `insert(root, value)`) — pass `tree.root` when needed.

This repository is intended for educational purposes only — use it to experiment with trees and learn how common tree operations work.