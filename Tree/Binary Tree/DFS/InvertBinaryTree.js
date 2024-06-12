/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function f(root){
    if(root==null) return;// if root is null simply return
    //invert left sub tree
    f(root.left);
    // invert right sub tree
    f(root.right);
    
    // swap left node and right node after reach leaf node
    // leaf node is a node who have not any children
    let temp=root.left;
    root.left=root.right;
    root.right=temp;

 }
var invertTree = function(root) {
    f(root);
    return root;
    
};