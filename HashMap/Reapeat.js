//first non  reqpeating element in array
// 3,44,5,6,7,8,2,3,44,5,6 here 7 is first non reapeat element 
//2,3,4,5,6,7,4,5,6,7 here 2 is first non reapeating element
//key is element frequency is value
function reapeat(arr){
    let mymap=new Map();
    for(let i=0;i<arr.length;i++)
    {   
        if(mymap.has(arr[i]))  //check map me arr[i] hai ki nahi if true
        {
        mymap.set(arr[i],mymap.get(arr[i])+1) // map me us value vo pakdenge of  uski frequency 1 se badha denge 
        }
        else
        {
            mymap.set(arr[i],1); // els may m set krenge key = arr[i] , valuee 1== arr[1]=44 ,1
        }
    }
    for (var i = 0; i <arr.length; i++)
        if (mymap.get(arr[i]) == 1)//jis 1st element ka count 1 hoga usko print kra lenge 
            return arr[i];
    return -1;
}
let arr= [3,44,5,6,7,8,2,3,44,5,6]
let n=arr.length;
console.log(reapeat(arr));