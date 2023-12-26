class Queue{
    constructor(){
        this.item=[];
        this.rear=0;
        this.front=0;
    }
    enqueue(element)
    {
       this.item[this.rear]=element;
       this.rear++;
    }
    dequeue(){
        const item=this.item[this.front];
        delete this.item[this.front];
        this.front++;
        return item;
    }
    isEmpty(){
        return this.rear - this.front===0;
    }
    print(){
        console.log(this.item);
    }
}

const item=new Queue();
item.enqueue(10);
item.enqueue(20);
item.dequeue();
item.print();
console.log(item.isEmpty());