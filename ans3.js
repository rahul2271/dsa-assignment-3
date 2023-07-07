function nextPermutation(nums) {
    const n = nums.length;
    let i = n - 2;
  
    // Find the first pair of adjacent elements in descending order
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    if (i >= 0) {
      // Find the smallest element in the suffix greater than nums[i]
      let j = n - 1;
      while (j > i && nums[j] <= nums[i]) {
        j--;
      }
  
      // Swap nums[i] with the smallest element greater than nums[i]
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  
    // Reverse the suffix of the array
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
  
  // Example usage
  let nums = [1, 2, 3];
  nextPermutation(nums);
  console.log(nums); // Output: [1, 3, 2]
  
  nums = [3, 2, 1];
  nextPermutation(nums);
  console.log(nums); // Output: [1, 2, 3]
  