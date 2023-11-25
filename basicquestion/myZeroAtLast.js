function arange(arr)
{
    var arr2=[];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]==0)
        {
             arr2.push(arr[i]);
        }
        else{
            arr2.unshift(arr[i]);
        }
    }
    console.log(arr2);
}


let arr=[1,8,2,4,5,6,0,9,0,10,0,11];
arange(arr);