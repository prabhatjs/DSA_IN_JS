function check(arr)
{
    var flag=true;
    for(var i=1;i<arr.length;i++)
    {
        if(arr[i]<arr[i-1])
        {
            flag= false;
            break;
        }
        else{
            flag= true;
        }
    }
    return flag;
}

let arr=[1,2,3,0,5];
console.log(check(arr));