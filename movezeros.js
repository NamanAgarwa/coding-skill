// Input: nums = [0, 1, 0, 3, 12];
// Output: [1, 3, 12, 0, 0];
// 🔹 Optimal Approach: Two-Pointer (O(n) time, O(1) space)

function moveZeros(nums) {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[idx]] = [nums[idx], nums[i]];
      idx++;
    }
  }
  return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
