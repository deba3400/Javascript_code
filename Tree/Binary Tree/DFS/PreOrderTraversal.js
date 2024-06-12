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
 * @return {number[]}
 */

let result=[];
 function preorder(root){ 
    if(root==null)return null;// if root is null return null
    result.push(root.val);// other wise add root value in array
    // read left sub tree
    preorder(root.left);
    // after complete of left subtree read right sub tree value
    preorder(root.right);

 }
    
var preorderTraversal = function(root) {
    result=[];
    preorder(root);
    return result;
    
};