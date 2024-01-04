class StackImpe{
    constructor(){
        this.items=[];
     
    }
    add(data)
    {
        this.items.push(data);
      
    }
    remove()
    {
        if(this.items.length>0)
        {
           return this.items.pop();
        }
    }
}

const obj=new StackImpe();
obj.add(10);
obj.add(20);
obj.add(20);
obj.add(20);
obj.add(20); //-----last in first out--
console.log(obj.remove());
console.log(obj.items);
