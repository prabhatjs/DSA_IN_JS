function RainWater(arr)
{
    let n=arr.length;
    let left=new Array(n)//define array of n size
    left[0]=arr[0];
    for(let i=1;i<left.length;i++)
    {
        left[i]=Math.max(left[i-1],arr[i]);
    }
    let Right=new Array(n)
        Right[n-1]=arr[n-1];//last value remember of comparing
        for(let i=n-2;i>=0;i--)
        {
            Right[i]=Math.max(Right[i+1],arr[i]);
        }
        let sum=0;
        for(let i=0;i<Right.length;i++)
        {
            sum=sum+Math.min(left[i],Right[i])-arr[i];
        }
        return sum;

}

let arr=[0,1,0,2,1,0,1,3,2,1,2,1];

console.log(RainWater(arr));