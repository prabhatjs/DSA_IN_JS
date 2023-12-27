function checksorted(arr){
        for(let i=1;i<arr.length;i++)
        {
            if(arr[i]>=arr[i-1])//2>=1 true 
            {
                
            }
            else{
                return false;
            }
        }
        return true;
}

let arr=[1,2,3,8,5];
console.log(checksorted(arr));