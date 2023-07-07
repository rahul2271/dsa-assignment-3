function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let closestSum = Infinity; // Initialize the closest sum with a large value
  
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1; // Left pointer
      let right = nums.length - 1; // Right pointer
  
      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right]; // Calculate the sum
  
        if (sum === target) {
          return sum; // Found the exact sum, return it
        }
  
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum; // Update the closest sum if the current sum is closer to the target
        }
  
        if (sum < target) {
          left++; // Move the left pointer towards right to increase the sum
        } else {
          right--; // Move the right pointer towards left to decrease the sum
        }
      }
    }
  
    return closestSum;
  }
  
  // Example usage
  let nums = [-1, 2, 1, -4];
  let target = 1;
  console.log(threeSumClosest(nums, target)); // Output: 2
  