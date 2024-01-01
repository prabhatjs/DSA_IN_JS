class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;

    }
}

class QueueUsingLinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    enqueue(data)
    {
        let node=new Node(data);
        if(this.isEmpty())
        {
            this.head=node;
        }
        else{
            let previouspointer=this.head;
            while(previouspointer.next)
            {
                previouspointer=previouspointer.next;
            }
                previouspointer.next=node;
        }
        this.size++;
    }
     removeFirst() {
        if (this.isEmpty()) {
          return "List is empty";
        } else if (this.size == 1) {
          this.head = null;
          this.size--;
        } else {
          this.head = this.head.next;
          this.size--;
        }
      }


    isEmpty(){
        return this.size === 0;
    }
    printList() {
        if (this.isEmpty()) {
          console.log("List Is Empty");
        } else {
          let current = this.head;
          let Storage = " ";
          while (current != null) {
            Storage += ` ${current.data} `;
            current = current.next;
          }
          console.log(Storage);
        }
      }
      getSize(){
        return this.size;
      }
}

let Qobj=new QueueUsingLinkedList();
Qobj.enqueue(10);
Qobj.enqueue(20);
Qobj.enqueue(30);
// console.log(Qobj.removeFirst());
// console.log(Qobj.removeFirst());
// console.log(Qobj.removeFirst());
console.log(Qobj.getSize());
Qobj.printList();