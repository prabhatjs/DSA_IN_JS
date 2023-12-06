function findIndex(arr,item,index)
{
    if(index===arr.length)
    {
        return -1;
    }
    if(arr[index]===item)
    {
        return index;
    }
    return findIndex(arr,item,index+1);
}

let arr=[1,2,3,4,4,45,5,5];
let item= 59;
console.log(findIndex(arr,item,0));