var rotate = function(nums, k) {
    let n=nums.length;
    k=k%n;
     Reverse(nums,0,n-1)//full rotate
     Reverse(nums,0,k-1)//half ratate
     Reverse(nums,k,n-1)//another half rotate
     return arr.toString();
};

function Reverse(arr,i,j){
    while(i<j){
        let temp=arr[i];
        arr[i]=arr[j]
        arr[j]=temp;
        i++;j--;
       
    }
   
}
let arr=[5,10,15,20,25,30,35,40];
k=3;
console.log(rotate(arr,k));