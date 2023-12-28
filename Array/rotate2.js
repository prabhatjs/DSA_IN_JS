function rotate2(arr){
    let temp=arr[0];
    let n=arr.length-1;
    for(let i=1;i<n;i++)
    {
        arr[i-1]=arr[i];
    }
    arr[n-1]=temp;
    return arr.toString();
}
let arr=[1,2,3,4,5];
console.log(rotate2(arr));