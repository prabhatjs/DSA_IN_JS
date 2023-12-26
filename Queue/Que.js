class Queue{
    constructor(){
        this.item=[];
    }
    enqueue(element)
    {
        this.item.push(element)
    }
    dequeue()
    {
         return this.item.shift();//shift will remove the first value of array

    }
    isEmpaty(){
        return this.item.length===0;
    }
    peek()
    {
        if(!this.isEmpaty())
        {
            return this.item[0];
        }
        return null;
    }
    size()
    {
        return this.item.length
    }
    print(){
        console.log(this.item.toString());
    }
}

const queue=new Queue();

 queue.enqueue(10);
 queue.enqueue(20);
 queue.enqueue(30);
    queue.print();
console.log(queue.peek())
console.log(queue.isEmpaty());