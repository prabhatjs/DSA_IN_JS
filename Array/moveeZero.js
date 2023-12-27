/**
 * move zero at the last in array solved by two pointer approch
 * [1,0,3,4,0,5,6,7,0,9]
 * 
 * i=3
 * j=0
 * check arr[i]!=0 yes is it non zero number
 * swap with arr[j] j++
 * 
 * 1,3,0,4,5,6,7,0,9
 * i=4 arr[i]!=0 yes is it non zero number
 * j=0 swap with
 * 
 * if i is on the zero i++;
 * j alwasy on the zero 
 * 
 * check if 
 * 
 */

function zeromover(arr)
{
    let j=-1;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==0)
        {
            j=i;
            break;
        }      
    }
    if (j==-1) return arr;
    for(let i=j+1;i<arr.length;i++)
    {
        if(arr[i]!=0)
        {
            [arr[i],arr[j]]=[arr[j],arr[i]];//destructuring swap 0,1= to 1,0
            j++;
        }
    }
    return arr.toString();
}

let arr=[1,2,3,6,0,7];
console.log(zeromover(arr))