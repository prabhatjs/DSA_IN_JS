function largest(arr){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]>max)
            {
                max=arr[i]
            }
    }
    return max;
}

let arr=[1,5,3,2,0,10,9,100,80];
console.log(largest(arr));