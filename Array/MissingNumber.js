function missing(arr){
    //sum of natural number n*(n+1)/2
    let sum=0; 
    let n=arr.length;
    sum=((n+2)*(n+1))/2;//natural number sum 
    for(let i=0;i<n;i++)
    {
        sum=sum-arr[i];// subtract totalsum- arr[curentvalue]; and of the for loop;
    }
     return (sum);
}
let arr=[1,2,3,4,5,7,6,9];
console.log(missing(arr));