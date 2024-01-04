class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }


prepend(data) {
    //add on first
    //two sinario if list is empty or list is not empty
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      //list is not empty--
      node.next = this.head; //jo nayi node ki next value hoge vo agli node koi point kregi agr list khali nhi hai to
      this.head = node;
    }
    this.size++;
  }
  append(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let previous = this.head;
      while (previous.next) {
        previous = previous.next;
      }
      previous.next = node;
    }
    this.size++;
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
//important
    Removeduplicate(){
        if(this.isEmpty())return null;
        let current=this.head;
        while(current.next!=null){
            if(current.data==current.next.data){
                current.next=current.next.next;//skil list node like this
                this.size--;
            }else{
                current=current.next;
            }
        }
        return this.head;
    }
    secondLogicForKthNode(index)
    {
      let slow = this.head;
      let fast = this.head;
      for(let i=1;i<index;i++)
      {
        fast=fast.next;
      }
      while(fast.next!=null)
      {
        let current=slow;
        slow=slow.next;
        fast=fast.next;
      }
      
      console.log(slow.data);
    }
    secondLogicForKthNodeDelte(index)
    {
      let slow = this.head;
      let fast = this.head;
      for(let i=1;i<=index;i++)
      {
        fast=fast.next;
      }
      while(fast.next!=null)
      {
        slow=slow.next;
        fast=fast.next;
      }
      slow.next=slow.next.next;
      this.size--;
      return slow.data;
      
    }

    isEmpty() {
        return this.size === 0;
      }
      getSize() {
        return this.size;
      }

  }

  const list = new LinkedList();
  list.printList();
  list.append(1);
  list.append(20);
  list.append(30);
  list.prepend(40);
  list.append(50);
  list.prepend(60);
  list.append(70);
  list.append(80);
  list.printList();
//   list.Removeduplicate();
list.secondLogicForKthNode(2);
console.log(list.secondLogicForKthNodeDelte(2));
  list.printList();

