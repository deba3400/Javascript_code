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
 * @return {number}
 */
function f(root){
    if(root==null)return 0;
    let lst=f(root.left);
    let rst=f(root.right);
    return 1+Math.max(lst,rst);
 }
var maxDepth = function(root) {
   return f(root);
    
};