/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let neighbours=[[1,0],[0,1],[-1,0],[0,-1]];
function bfs(board){
   let qu=[];
   for(let i=0;i<board.length;i++){
       for(let j=0;j<board[0].length;j++){
           if(i==0 || i==board.length-1 || j==0 || j==board[0].length-1){
               if(board[i][j]=="O"){
                   // console.log([i,j]);
                   qu.push([i,j]);
                   board[i][j]="a"
               }
           }
       }
   }
   // console.log(qu);
   // console.log(board);
   while(!(qu.length==0)){
       let curr=qu.shift();
       // board[curr[0]][curr[1]]="a";
       for(let n=0;n<4;n++){
           let nx=curr[0]+neighbours[n][0];
           let ny=curr[1]+neighbours[n][1];
           if(nx<0 || ny<0 || nx>=board.length || ny>= board[0].length)continue;
           if(board[nx][ny]=="O"){
               qu.push([nx,ny]);
               board[nx][ny]="a";
           }
       }
   }
   console.log(board);
   for(let i=0;i<board.length;i++){
       for(let j=0;j<board[0].length;j++){
            if(board[i][j]=="O"){
               board[i][j]="X";
           }
           if(board[i][j]=="a"){
               board[i][j]="O";
           }
          
       }
   }


}
var solve = function(board) {
   return bfs(board);
};
