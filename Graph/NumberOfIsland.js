/**
 * @param {character[][]} grid
 * @return {number}
 */
let neighbour=[[1,0],[-1,0],[0,-1],[0,1]]
function bfs(i,j,grid){
  let qu=[];
  qu.push([i,j]);
  grid[i][j]="-1";
  while(!qu.length==0){
   // let areaOfIsland=1;
   let curr=qu.shift();
   for(let n=0;n<4;n++){
       let neighbourX=curr[0]+neighbour[n][0];
       let neighbourY=curr[1]+neighbour[n][1];
       if(neighbourX<0||neighbourY<0||neighbourX >= grid.length||neighbourY >= grid[0].length){
           continue;
       }
         if(grid[neighbourX][neighbourY]==="1"){
           // areaOfIsland++;
           qu.push([neighbourX,neighbourY]);
           grid[neighbourX][neighbourY]="-1"
       }

   }
  }
//    return areaOfIsland;
}
var numIslands = function(grid) {
   let cc=0;
   for(let i=0;i<grid.length;i++){
       for(let j=0;j<grid[0].length;j++){
           if(grid[i][j]==="1"){
             bfs(i,j,grid)
             cc++;
           }
           
       }
   }
   return cc;
   
};