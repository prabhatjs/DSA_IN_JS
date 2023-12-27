
/*left roate the array at k place

jitni array ki length hogi utni bar array rotate hoga uske baad array repeat krega first jese
 [1,2,3] k=1
 [2,3,1]

 [1,2,3] k=2
 [3,2,1]

 k=3 hoga to aray first postion jesa ho jayega

 expale--[1,2,3,4,5,6,7]
 find 20th rotation
 rotate=20%size of aaray[7]=6
 7+7+6 =6th roation is like 20th 
  
 d=3

 reverse(arr,arr+K), arraay ko revers krenege phle  3 place tk 3,2,1
 reverse(arr+k,arr+n) array ko reverse krenge next 3 place ke baad uske last tak arr+k starting point and arr+n last point 7,6,5,4
 reverse(arr,arr+n) array
  ko reverse krnege pure array ko --4,5,6,7,1,2,3

*/ 

function rotate(arr,n,k)
{
    
    arr.reverse(arr,arr+k);
    arr.reverse(arr+k,arr+n);
    arr.reverse(arr,arr+n);
    return arr;
}

let arr=[1,2,3,4,5];
let k=3;
let n=arr.length;
console.log(rotate(arr,n,k));

