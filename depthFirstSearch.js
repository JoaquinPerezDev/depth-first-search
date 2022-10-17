// You're given a *Node* class that has a *name* and an array of optional *children* nodes. When put together, nodes form an acyclic tree-like structure.
// Implement *depthFirstSearch* method on the Node class, which takes in an empty array, traverses the tree using the Depth-first Search approach(specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.

// Sample Input: graph =     A
//                      /   |   \
//                     B    C   D
//                   /  \     /  \
//                  E   F    G   H
//                    /  \    \
//                   I   J    K

// Sample Output: ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]

// To think about the logic of a depth-first search, how it functions is that we start
// at the root node "A". Then we traverse down the first available branch path to the
// leaf node, in this case: "A", "B", "E". If we look at the sample output array, these
// are the first three values. The key thing about this algorithm is its recursive
// nature. We can write various syntax/approaches for looping, however the key element
// is calling the depthFirstSearch function within itself, target the children node of
// our root node "A". In this case, it would be "B". So we would start at "B", then go
// to "F", finally landing on "I". If we look at the sample output array, "F" and "I"
// are the following two values after our initial three from our first branch. We could
// then say that "A", "B", "F", "I" is our second branch in our graph tree. Because of
// the recursive nature of this algorithm, we can assume that the function will continue
// traversing down any remaining available branches, pushing the name of each child node
// to the end of the output array.

//O(V + E) time | O(V) space complexity

//Time complexity logic: The runtime will be based on the number of vertices(nodes) and their edges. A vertex is the end point of two edges, in this case each node. The edges themselves are pointers used to connect two vertices. In this case "A" to "B" has 1 edge. For this reason, since we are using a loop in our algorithm, the loop will take as long as there are nodes in the tree.

//Space complexity logic: This is fairly straight forward in the scene that the space will be directly related to the amount of vertices(nodes) in the tree. Even if the tree had one branch with all possible vertices linking on the left-most branch, it would still only take up (V) amount of space.

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array, node = this) {
    // Write your code here.
    array.push(node.name);
    for (const child of node.children) {
      this.depthFirstSearch(array, child);
    }
    return array;
  }
}

//Below is a forEach variation as well as showing that it's not necessary to pass in
//this.node into the function. But it does make it more readable when you do.

// depthFirstSearch(array) {

//   array.push(this.name);
//   this.children.forEach((child) => child.depthFirstSearch(array));
//   return array;
// }
