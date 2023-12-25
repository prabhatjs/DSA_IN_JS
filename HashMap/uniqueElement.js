//find the unique elemnt of array

function unique(arr){
    let mymap=new Map();
    for(let i=0;i<arr.length;i++)
    {
        mymap.set(arr[i],1);

    }
  console.log(mymap.size);
}

let arr=[6,6,6,6,6,6,6,6,6];
unique(arr);