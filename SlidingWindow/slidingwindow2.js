/*
Given an array of integers nums and an integer k, 
return the number of contiguous subarrays where the product of all 
the elements in the subarray is strictly less than k.

Example 1:

Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
Example 2:

Input: nums = [1,2,3], k = 0
Output: 0
 */

//count krne hai subarray ko jo k ki value se chote hen

var numSubarrayProductLessThanK = function (nums, k) {
    let start = 0;
    let end = 0;
    let product = 1;
    let ans = 0;
    //loop
    while (end < nums.length) {
      //growing
      product = product * nums[end];
  
      //shrinking
      while (product >= k && start <= end) {
        product = product / nums[start];
        start++;
      }
      ans = ans + (end - start + 1); //anser ko update krenge har bar 0-0+1=1
      end++;
    }
    return ans;
  };
  