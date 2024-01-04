//linkedList implementation of stack 

class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}

//stack class 
class StackImpe{
    constructor(){
        this.First=null;
        this.Last=null;
        this.size=0;
    }

    push(data)
    {
      const node=new Node(data);
      if(this.isEmpty())
      {
        this.First=node;
      }
      else{
        node.next=this.First;
        this.First=node;
      }
      this.size++;
    }
   
    pop(){
      let current = this.First;
      
      //If there is item then remove it 
      //and make the next element as the first
      if(current){
        let elm = current.data;
        console.log(elm)
        current = current.next;
        console.log(current);
        this.First = current;
        this.size--;
        return elm;
      }
      
      return null;   
    }
    getSize(){
        this.size;
        console.log(this.size);
    }
    isEmpty() {
        return this.size === 0;
      }

}

const stackdummy=new StackImpe();

stackdummy.push(20);
stackdummy.push(30);
stackdummy.push(40);
stackdummy.push(50);
 console.log(stackdummy.pop());
  console.log(stackdummy.pop());
// console.log(stackdummy.pop());
// console.log(stackdummy.pop());

stackdummy.getSize();


