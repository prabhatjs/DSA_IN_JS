/***
 Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
 such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. 

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

 **/
//brute forse approch
function threesum(arr,target)
{
    const result=[];
    const set=new Set();
    for(var i=0;i<arr.length;i++)
    {
        for (var j=i+1;j<arr.length;j++)
        {
            for(var k=j+1;k<arr.length;k++)
            {
                if(arr[i]+arr[j]+arr[k]==target)
                {
                    result.push(arr[i],arr[j],arr[k]);
                    set.add(result);
                    
                }
            }
        }
    }
    // return console.log("["+arr[i]+","+arr[j]+","+arr[k]+"]");
    return set;
}


nums = [-1,0,1,2,-1,-4]

console.log(threesum(nums,0));