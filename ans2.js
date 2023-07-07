function fourSum(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const result = [];
  
    for (let i = 0; i < nums.length - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue; // Skip duplicate elements for i
      }
  
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue; // Skip duplicate elements for j
        }
  
        let left = j + 1; // Left pointer
        let right = nums.length - 1; // Right pointer
  
        while (left < right) {
          let sum = nums[i] + nums[j] + nums[left] + nums[right];
  
          if (sum === target) {
            result.push([nums[i], nums[j], nums[left], nums[right]]);
            // Skip duplicate elements for left and right
            while (left < right && nums[left] === nums[left + 1]) {
              left++;
            }
            while (left < right && nums[right] === nums[right - 1]) {
              right--;
            }
            left++;
            right--;
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
  
    return result;
  }
  
  // Example usage
  let nums = [1, 0, -1, 0, -2, 2];
  let target = 0;
  console.log(fourSum(nums, target));
  // Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
  