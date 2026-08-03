/*Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2


Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
The input is generated such that a majority element will exist in the array.


Follow-up: Could you solve the problem in linear time and in O(1) space?*/

var majorityElement = function(nums) {
  if(nums.length == 1) return nums[0];
  else{
  let num  = 0
  let sum = 0
  for (let i = 0; i <= nums.length-1; i++) {
    let filter = nums.filter(num => num !== nums[i]);
    if(nums.length - filter.length > sum){
      num = nums[i]
      sum = filter.length
    }
  }
  return num
  }
};

console.log(majorityElement([6,5,5]));