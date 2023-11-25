function binarySearch(arr,target){
    var startPointer=0;
    var endPointer=arr.length-1;

    while(startPointer<=endPointer)
    {   
        var MidPointer=Math.floor((startPointer+endPointer)/2);
        if(arr[MidPointer]==target)
        {
            return MidPointer;
        }
        else if(target>arr[MidPointer])//target bada hai to midpont ko ange move krenge or right m search krnge
        {
            startPointer=MidPointer+1;
        }
        else
        {
            endPointer=MidPointer-1;
        }
    }
}

let arr=[5,10,15,20,25,30,35,40];
console.log(binarySearch(arr,40));