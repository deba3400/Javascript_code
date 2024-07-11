/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function topoSort(graph,n,indegree){
    let qu=[];
    let vis=new Set();
    for(let i=0;i<n;i++){
       if(indegree[i]==0){
        qu.push(i);
        vis.add(i);
       }
    }
    let count=0;
    while(!(qu.length==0)){
        let curr=qu.shift();
        count++;
        for(let neighbour of graph[curr]){
            if(!vis.has(neighbour)){
                indegree[neighbour]--;
                if(indegree[neighbour]==0){
                    qu.push(neighbour);
                    vis.add(neighbour);
                }
            }
        }

    }
    return count ==n;


 }


var canFinish = function(numCourses, prerequisites) {
   let graph=[];
   for(let i=0;i<numCourses;i++){
    graph[i]=[];
   }
   let indegree=new Array(numCourses).fill(0);
   for(let j=0;j<prerequisites.length;j++){
    let a=prerequisites[j][0];
    let b=prerequisites[j][1];
    graph[b].push(a);
    indegree[a]++;
   }

   return topoSort(graph,numCourses,indegree);
    
};