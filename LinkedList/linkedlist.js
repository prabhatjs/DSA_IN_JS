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
    findElemntByIndex(index) {
      if (this.isEmpty()) {
        console.log("List Is empty");
      } else {
        let current = this.head;
        let counter = 0;
        if (index < 0 || index > this.getSize() - 1) {
          return "find Incorect Indexx";
        }
        // while (counter != index) {
        //   current = current.next;
        //   counter++;
        // }
        while (index > 0) {
          current = current.next;
          index--;
        }
        console.log("hello");
      }
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
  
    middleOfList() {
      let temp = this.head;
      let n = 0;
      while (temp != null) {
        n++;
        temp = temp.next;
      }
      let half = n / 2;
      temp = this.head;
      console.log(half);
      while (Math.floor(half--)) {
        temp = temp.next;
      }
      console.log(temp.data);
    }
    middleUsingSlowFast() {
      let slow = this.head;
      let fast = this.head;
      while (fast != null) {
        slow = slow.next;
        fast = fast.next.next;
      }
      console.log("this from SLow Fast pointer " + slow.data);
    }
    insertAtIndex(index, value) {
      if (index < 0 || index > this.size) {
        console.log("wrong Postion of inserting");
      } else if (index === 0) {
        this.prepend(value);
      } else {
        const node = new Node(value);
        let previous = this.head;
        for (let i = 0; i < index - 1; i++) {
          previous = previous.next;
        }
        node.next = previous.next;
        previous.next = node;
      }
      this.size++;
    }
    removeAtIndex(index) {
      let removevaluePointer;//this work like a holder it hold the address of 
      let previous = this.head;
      if (index < 0 || index > this.size) return;
  
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      removevaluePointer = previous.next;
      previous.next = removevaluePointer.next;
      console.log("remove Value" + removevaluePointer.data);
    }
    // searchbyValue(data) {
    //   let temp = this.head;
    //   while (temp != null) {
    //     temp = temp.next;
    //   }
    //   if (data == temp.data) {
    //     console.log(temp.data);
    //   } else {
    //     console.log("data not found");
    //   }
    RemoveNodeByPassingVale(value) {
      if (this.isEmpty()) {
        return null;
      }
      if (this.head.data === value) {
        this.head = this.head.next;
        this.size--;
        return value;
      }
      //agr node middle me hai ya khin or tab
      else {
        let removevalue;
        //assing previuos pointer to this.head
        let previous = this.head;
        //previuous tb tk chalega jab tak vale nhi milti hai
        while (previous.next && previous.next.data != value) {
          previous = previous.next;
        }
        if (previous.next) {
          console.log(previous.next);
          removevalue = previous.next;
          previous.next = removevalue.next;
          this.size--;
          return value;
        }
      }
    }
    reverseLinkdedList()
    {
      let previous=null;   //null---[1]<---[2]<---[3]<---[4]head,previous null se start hoga or cureent 1 se hoga n me connect store hoga jo phle bana hua tha 1--->2--->3--->4
      let current=this.head;
      while(current!=null)
      {
        let n=current.next;
        current.next=previous;
        previous=current;//yhan ange chal rha ha current jhan ha vhan ab previous hoga jhan current tha vhan n
        current=n;
      }
      this.head=previous;
    }
      KthNodeFormLast(index){
        let counter=0;
        let temp=this.head;
        while(this.head!=null){
          counter=counter+1;
          this.head=this.head.next;
        }
       let m=counter-index+1;//ap formula for 
      //  let temp=this.head;
       for(let i=0;i<m-1;i++)
       {
        temp=temp.next;
       }
       console.log(temp.data);
      
        // console.log("length"+counter);
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

          slow=slow.next;
          fast=fast.next;
        }
        console.log(slow.data);
      }
    isEmpty() {
      return this.size === 0;
    }
    getSize() {
      return this.size;
    }
  }
  
  //object of linkedlist
  const list = new LinkedList();
  list.printList();
  list.prepend(10);
  list.prepend(20);
  // console.log("Size of List " + list.getSize());
  // console.log("list is empty " + list.isEmpty());
  list.prepend(50);
  // list.printList();
  // list.findElemntByIndex(3);
  list.append(100);
  list.append(100);
  list.append(101);
  list.append(103);
  list.printList();
//   list.middleOfList();
//list.middleUsingSlowFast();
  // list.insertAtIndex(1, 40);
  //list.removeAtIndex(2);
  //console.log("remove by vaue " + list.RemoveNodeByPassingVale(100));
  //console.log(list.reverseLinkdedList());
  list.KthNodeFormLast(2);
  console.log(list.secondLogicForKthNode(2));
  list.printList();
  