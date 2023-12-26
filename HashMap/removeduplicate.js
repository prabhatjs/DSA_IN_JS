function unique(arr){
    let mymap=new Set();

    for(let i=0;i<arr.length;i++)
    {
        mymap.add(arr[i],i);
    }
    for(let key of mymap){
        console.log(key);
      
       
    }
    console.log(myarray);

    console.log("hello");
}

let arr=[6,6,5,5,4,4,6,7,8];
unique(arr);