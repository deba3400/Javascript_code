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
function inorder(root){ 
   if(root==null)return null;// if root is null return null
   // read left sub tree
   inorder(root.left);
   result.push(root.val);
   // after complete of left subtree read right sub tree value
   inorder(root.right);

}
var inorderTraversal = function(root) {
   result =[];
   inorder(root);
   return result;
   
};