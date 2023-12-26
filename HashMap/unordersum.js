//given an unsorted array and find the given sum 
function unsorted(arr,target)
{
    let mymap=new Map();
    for (let i in arr)
    {
        const value=target-arr[i];  //11-1=10
        if(mymap.has(value))        //10 in mymap no
        {
            
            return [i,mymap.get(value)];
        }
        else{
            mymap.set((arr[i]),i)  
        }
        // console.log(arr[i],i);
    }
}
         0,1,2,3,4,5,6,7
let arr=[1,2,3,6,4,7,9,5];
let k=11;
console.log(unsorted(arr,k));