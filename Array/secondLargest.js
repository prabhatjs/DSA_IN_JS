function largest(arr){
    let max=arr[0];
    let secondmax=-1;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max)
            {
                secondmax=max;
                max=arr[i]
            }
            else if(arr[i]<max && arr[i]>secondmax)
            {
                secondmax=arr[i];
                console.log(secondmax);
            }
    }
    return secondmax;
}

let arr=[9,7,7,7,7];
console.log(largest(arr));