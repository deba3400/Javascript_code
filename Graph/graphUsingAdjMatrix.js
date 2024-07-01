// Graph implementation using Adjacency Matrix

class Graph{
     constructor(noOfVertices){
        this.v=noOfVertices;
        this.adjMat=new Array(this.v);
        for(let i=0;i<this.v;i++){
            this.adjMat[i]=new Array(this.v);
        }
     }
     addEdge(v1,v2,biDir=true){
        this.adjMat[v1][v2]=1;
        if(biDir){
            this.adjMat[v2][v1]=1
        }
     }
     display(){
        console.log(this.adjMat);
     }
}