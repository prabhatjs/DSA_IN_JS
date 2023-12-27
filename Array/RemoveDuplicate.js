//using 2 Pointer approch in sorted aaray
//1st vale next vali value k not equal hogi 

function removeDup(arr){
 

    let i=0;
    for(let j=1;j<arr.length;j++) //next pointer start from arr[1] index
    {
        if(arr[i]!=arr[j])//first or next equal nhi honge j++ hoga
        {
            arr[i+1]=arr[j];// first vale me next ki value copy kr denge
            i++;            //first ko ange badha denge
        }
    }
    return (i+1);     //number of count unique element


    

}


let arr=[1,1,2,2,3,3,4,5,6,7,7,8,8];
console.log(removeDup(arr));