function BalanceBrackets(arr){
    let Stack=[];
    // console.log(arr.length);
    // console.log(arr[1]);
    // console.log(arr[0]+arr[1]+arr[2]);
    for(let single of arr)
    {
      //  console.log(arr.length);
        if(single ==='(' || single==='{' || single==='[')
        {
            Stack.push(single);
        }

        if(single==')' )
        {
            if(Stack.length==0){
                return false
            }
            Stack.pop();
        }
        if(single=='}' )
        {
            if(Stack.length==0){
                return false
            }
            Stack.pop();
        }
        if(single==']' )
        {
            if(Stack.length==0){
                return false
            }
            Stack.pop();
        }

    }
     return Stack.length===0;
}

let arr='([()])';
// BalanceBrackets(arr);
console.log(BalanceBrackets(arr));