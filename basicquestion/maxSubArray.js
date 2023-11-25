function app(array)
{
    
    for(let i=0;i<=array.length-3;i++){
        for(let j=i+1;j<array.length;j++){
           for(let k=j+1;k<arr.length;k++)
           {

           
           console.log(array[i] + " "+array[j] +" "+array[k]);
           }
        }
    }
}


var arr=[1,2,3,4,5];
app(arr);