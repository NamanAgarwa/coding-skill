// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5
// Explanation: nums is modified to [0,1,2,3,4,_,_,_,_,_]

// 🔹 Approach: Two Pointers (O(n) time, O(1) space)

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return nums;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

function removeDuplicatesAndSort(nums) {
  const unique = [...new Set(nums)]; // removes duplicates
  return unique.sort((a, b) => a - b); // sorts ascending
}

function removeDuplicatesAndSort(nums) {
  nums.sort((a, b) => a - b);

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      result.push(nums[i]);
    }
  }

  return result;
}
