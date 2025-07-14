// ✅ 4. Maximum Subarray (Kadane's Algorithm)

// Problem:
// Given an integer array nums,
// find the contiguous subarray
//  (containing at least one number)
//   which has the largest sum, and return that sum.

// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6

// function maxSubArrayWithElements(nums) {
//   let currentSum = nums[0];
//   let maxSum = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     currentSum = Math.max(nums[i], currentSum + nums[i]);
//     maxSum = Math.max(currentSum, maxSum);
//   }
//   return maxSum;
// }

function maxSubArrayWithElements(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  let start = 0;
  let end = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      temp = i;
    } else {
      currentSum = currentSum + nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = temp;
      end = i;
    }
  }
  return maxSum;
}

console.log(maxSubArrayWithElements([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
