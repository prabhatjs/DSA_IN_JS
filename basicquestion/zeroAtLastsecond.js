function app(arr)
{
    var i=0;
    var j=arr.length-1;
    while(i<=j)
    {
        if(arr[i]>0)
        {
            i++;
        }
        else if (arr[i]==0)
        {
            swap(arr,i,j);
            j--;  
        }
    }
    function swap(arr,i,j)
    {
        temp=arr[i];
        arr[i]=arr[j]
        arr[j]=temp;
    }
    console.log(arr);
}

let arr=[5,10,0,20,0,30,0,40,80,0,0,0,100];
console.log(app(arr));