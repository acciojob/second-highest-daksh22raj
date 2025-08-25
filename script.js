function secondHighest(arr) {
  if (arr.length < 2) return -Infinity; // Too few elements

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      // New highest found
      second = first;
      first = num;
    } else if (num < first && num > second) {
      // Candidate for second highest
      second = num;
    }
  }

  return second;
}
