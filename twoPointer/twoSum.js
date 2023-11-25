function twoSum(arr,target)
{
    var i=0;
    var j=arr.length-1
    while(i<j)
    {   var sum=0;
        sum=arr[i]+arr[j];
        if(sum==target)
        {
            return [i,j];
         
        }
        else if(target<sum){
            j--;
        }
        else{
            i++;
        }
    }
}

let arr=[3,2,4];
var target=6;
console.log(twoSum(arr,target));