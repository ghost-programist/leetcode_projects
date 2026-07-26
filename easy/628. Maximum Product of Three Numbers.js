/*628. Maximum Product of Three Numbers
Solved
Easy
Topics
premium lock icon
Companies
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.



Example 1:

Input: nums = [1,2,3]
Output: 6
Example 2:

Input: nums = [1,2,3,4]
Output: 24
Example 3:

Input: nums = [-1,-2,-3]
Output: -6*/

var maximumProduct = function(nums) {
  nums = nums.sort((a, b) => b - a);

  const value1 = nums[0] * nums[1] * nums[2];

  const value2 = (nums[nums.length - 1] * nums[nums.length - 2]) * nums[0];

  return value1 > value2 ? value1 : value2;
};
console.log(maximumProduct([-100,-2,-3,1]))