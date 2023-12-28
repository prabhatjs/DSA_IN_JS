class QueueUsingStack{
    constructor(){
        this.stack1=[];
        this.stack2=[];
    }

    add(data)
    {
        for(let i=0;i<this.stack2.length-1;i++)
        {
            this.stack1.push(this.last.pop());
        }
        this.stack1.push(data);
    }
    remove(){
    //stack 1 se stack 2 me data copy krenge or jo top ka value hoga usko pop krenge stack 2 se
    while(this.stack1.length>0)
    {
        this.stack2.push(this.stack1.pop())
    }
    return this.stack2.pop();
    }
    peekelement(){
        if(this.stack1.length>0)
        {
            return this.stack1[0];
        }
        return this.stack2[this.stack2.length-1];
    }
}
 const elem=new QueueUsingStack();
 elem.add(10);
 elem.add(20);
 elem.add(30);
 elem.add(40);
 elem.add(50);
 elem.add(60);
 console.log(elem.stack1);
 console.log(elem.remove());
 console.log(elem.peekelement())
