//reverse array--
function ReverseArray(arr)
{
    var i=0;
    var j=arr.length-1;//n-i-1
    while(i<=j)
    {
        swap(arr,i,j)
        i=i+1;
        j=j-1;
       
    }

    function swap(arr,i,j)
    {
        temp=arr[i];
        arr[i]=arr[j]
        arr[j]=temp;
        //console.log(arr[i]+","+arr[j])
    }
    console.log(arr);
}
let arr=[5,10,15,20,25,30,35,40];

ReverseArray(arr);