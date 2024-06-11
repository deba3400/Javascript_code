class node{
   constructor(data){
       this.data=data;
       this.next=null;
   }

}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
   getHead(){
    if(this.head==null)return undefined;
    return this.head.data;
   }

   getTail(){
    if(this.tail==null)return undefined;
    return this.tail.data;

   }
   isEmpty(){
    return this.head==null;
   }

   removefromHead(){
    if(this.head==null)return ;
    const newhead=this.head.next;
    this.head.next=null;
    this.head=newhead;

    if(this.head==null){
        this.tail=null;
    }
   }

   addAtTail(data){
    if(this.head==null){
        const newNode=new node(data);
          this.head=newNode;
          this.tail=newNode;  
          return; 
    }
    else{
    const newNode=new node(data);
    this.tail.next=newNode;
    this.tail=newNode;
    }
   }

}
class queue{
    constructor(){
         this.ll=new LinkedList();
    }

    enQueue(data){
        return this.ll.addAtTail(data);
    }

    deQueue(){
        return this.ll.removefromHead();
    }

    front(){
        return this.ll.getHead();
    }
    back(){
        return this.ll.getTail();
    }
    isEmpty(){
        return this.ll.isEmpty();
    }
    
}

const qu=new queue();
// qu.enQueue(41);
// console.log(isEmpty());
qu.enQueue(40);
qu.enQueue(50);
qu.enQueue(60);
// console.log(qu.front(),qu.back());
qu.deQueue();
console.log(qu.front(),qu.back());
