function unsorted(arr,target)
{
    let mymap=new Map();
    for (let i in arr)
    {
        const value=target-arr[i];  //11-1=10
            console.log("value-->"+value);
        if(mymap.has(value))        //10 in mymap no
        {
            console.log(i,mymap.get(value))
            return [i,mymap.get(value)];//i is value 
        }
        else{
            console.log(arr[i],i);
            mymap.set((arr[i]),i)  
        }
        //  console.log(arr[i],i);
    }
}
         0,1,2,3,4,5,6,7
let arr=[1,2,3,6,4,7,9,5];
let k=14;
console.log(unsorted(arr,k));