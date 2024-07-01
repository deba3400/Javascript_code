// implementation of graph using adjacency list

class graph{
  constructor(noOfVertices){
    this.v=noOfVertices;
     this.adjList=new Array(this.v);
    for(let i=0;i<noOfVertices;i++){
        this.adjList[i]=[];
    }
  }
  addEdge(v1,v2,bidir=true){
    this.adjList[v1].push(v2);
    if(bidir){
        this.adjList[v2].push(v1);
    }
  }
  display(){
    console.log(this.adjList);
  }

}
const g = new graph(5);
g.addEdge(0, 1);
g.addEdge(0, 4);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 2);
g.addEdge(2, 4);
g.addEdge(2, 3);
g.addEdge(4, 3);

g.display();