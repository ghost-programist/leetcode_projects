var intersection = function(nums1, nums2) {
  let sum = new Set(nums1.filter(num => nums2.includes(num)))
  return Array.from(sum)
};
console.log(intersection([1,2,2,1], [2,2]));


