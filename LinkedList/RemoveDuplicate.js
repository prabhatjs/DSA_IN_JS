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

    isEmpty() {
        return this.size === 0;
      }
      getSize() {
        return this.size;
      }

  }

  const list = new LinkedList();
  list.printList();
  list.prepend(10);
  list.prepend(10);
  list.prepend(10);
  list.prepend(20);
  list.prepend(20);
  list.prepend(30);
  list.prepend(50);
  list.prepend(50);
  list.printList();
  list.Removeduplicate();
  list.printList();

