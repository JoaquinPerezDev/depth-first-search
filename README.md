# depth-first-search

ALGO EXPERT EASY

You're given a *Node* class that has a *name* and an array of optional *children* nodes. When put together, nodes form an acyclic tree-like structure.<br>
Implement *depthFirstSearch* method on the Node class, which takes in an empty array, traverses the tree using the Depth-first Search <br> approach(specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.<br>

Sample Input: graph =     A <br>
                     /   |   \ <br>
                    B    C   D <br>
                  /  \     /  \ <br>
                 E   F    G   H <br>
                   /  \    \ <br>
                  I   J    K <br>

Sample Output: ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"] <br>
