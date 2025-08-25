//your JS code here. If required.
function secondHighest(arr) {
  if (arr.length < 2) return -Infinity; // too few elements

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      // Update both
      second = first;
      first = num;
    } else if (num < first && num > second) {
      // Update only second
      second = num;
    }
  }

  return second;
}

// ✅ Test cases
console.log(secondHighest([5, 1, 2, 3, 4]));     // 4
console.log(secondHighest([-1, -2, -3, -4, -5])); // -2
console.log(secondHighest([]));                   // -Infinity
console.log(secondHighest([1]));                  // -Infinity
console.log(secondHighest([1, 1, 1, 1, 1]));      // -Infinity
