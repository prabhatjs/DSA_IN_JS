
//[2,1,3,4,7,2,6,4,5],k=3
//k size ki array ka maximum sum batao using sliding

function SlidingWindowforMaxKsize(arr, k) {
    let sum = 0;
    let answer = 0;
    //phle window ka sum inkal lenge--
    for (let i = 0; i < k; i++) {
      sum = sum + arr[i]; //phle 3 index ka sum
    }
    answer = sum;
    for (let i = k; i < arr.length; i++) {
      //grow krna sum ko
      sum = sum + arr[i];
      //shrink krna mtlv minu krna phle value ko (i-k),i=3,k=3 0 index minus hoga
      sum = sum - arr[i - k];
      answer = Math.max(answer, sum);
    }
    console.log(answer);
  }
  
  let arr = [2, 1, 3, 4, 7, 2, 6, 4, 5];
  let k = 3;
  
  SlidingWindowforMaxKsize(arr, k);
  