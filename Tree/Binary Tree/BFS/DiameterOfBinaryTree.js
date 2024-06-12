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

let ans;
function f(root){
   if(root==null)return 0;
   let lst=f(root.left);
   let rst=f(root.right);
   ans=Math.max(ans,rst+lst+1);// add left subtree and rigth subtree for a particular node and compare with ans
   return 1+Math.max(lst,rst);// this return max height of subtree for each node
}
var diameterOfBinaryTree = function(root) {
   ans=-1;
   f(root);
   return ans-1;
   
};