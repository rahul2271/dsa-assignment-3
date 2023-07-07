function findMissingRanges(nums, lower, upper) {
    const missingRanges = [];
  
    let prev = lower - 1;
  
    for (let i = 0; i <= nums.length; i++) {
      let curr = i < nums.length ? nums[i] : upper + 1;
  
      if (curr - prev >= 2) {
        missingRanges.push(formatRange(prev + 1, curr - 1));
      }
  
      prev = curr;
    }
  
    return missingRanges;
  }
  
  function formatRange(start, end) {
    if (start === end) {
      return start.toString();
    } else {
      return start.toString() + '->' + end.toString();
    }
  }
  
  // Example usage
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  const missing = findMissingRanges(nums, lower, upper);
  console.log(missing);
  