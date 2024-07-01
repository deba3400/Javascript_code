/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function dfs(source,destination,g,visited){
    if(source==destination) return true;
    visited.add(source);
     let ans=false;
    for(const neighbour of g[source]){
       
        if(!visited.has(neighbour)){
            ans=ans|| dfs(neighbour,destination,g,visited);
        }
        
    }
    return ans;

 }
var validPath = function(n, edges, source, destination) {
    let g=new Array(n);
    for(let i=0;i<n;i++){
        g[i]=[];
    }
    for(i=0;i<edges.length;i++){
        const u=edges[i][0];
        const v=edges[i][1];
        g[u].push(v);
        g[v].push(u);
    }

    return dfs(source,destination,g,new Set())
};