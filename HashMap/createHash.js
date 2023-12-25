class HashTable{
    constructor(size){
        this.table=new Array(size); //size of table
        this.size=size;
    }
    //convert key into numeric character
    convertHash(key){
        let total=0;
        for(let i=0; i<key.length; i++){
            total+=key.charCodeAt(i); //each character in the key to a numeric value and sum of this number and modulo % of with the size its return  0 to 49 number 
        }
        return total % this.size;
    }
    set(key,value){
        const index=this.convertHash(key);//it return index
        this.table[index]=value;//store at index
    }
    get(key){
        const index=this.convertHash(key)
        return this.table[index];
    }
    remove(key){
        const index=this.convertHash(key);
        this.table[index]=undefined;
    }
    display(){
        for(let i=0;i<this.table.length;i++)
        {
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}



const table=new HashTable(50);

table.set("name","Prabhat");
table.set("name","Shivam");

table.display();