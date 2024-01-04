//maximum consicutive 1 [1,0,0,1,1,0,0,0,1,1,1]

function MaxConOne(arr)
{
    let maxOne=0;
    let count=0;
    for(let i=0;i<=arr.length;i++)
    {
        if(arr[i]==1)
        {
            count++;
            maxOne=Math.max(maxOne,count);
        }else{
            count=0;
        }
    }
    return maxOne;
}
let arr= [1,0,0,1,1,0,0,0,1,1,1];
console.log(MaxConOne(arr));
