function plusOne(digits) {
    const n = digits.length;
  
    // Iterate through the digits from right to left
    for (let i = n - 1; i >= 0; i--) {
      // Increment the current digit by one
      digits[i]++;
  
      // If the digit becomes 10, set it to 0 and propagate the carry
      if (digits[i] === 10) {
        digits[i] = 0;
      } else {
        // If there is no carry, return the updated digits
        return digits;
      }
    }
  
    // If there is a carry after iterating all digits, add an extra 1 at the beginning
    return [1, ...digits];
  }
  
  // Example usage
  const digits = [1, 2, 9];
  const incrementedDigits = plusOne(digits);
  console.log(incrementedDigits); // Output: [1, 3, 0]
  