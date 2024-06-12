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
function postorder(root){ 
   if(root==null)return null;// if root is null return null
   // read left sub tree
   postorder(root.left);
   
   // after complete of left subtree read right sub tree value
   postorder(root.right);
   result.push(root.val);

}
var postorderTraversal = function(root) {
   result=[];
   postorder(root);
   return result;
   
};