// Jose Rodriguez
// ITMD 441 Undergraduate Student

//Exercise #1
function minMaxAverage(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    console.log("Total Numbers: 0, Min Value: N/A, Max Value: N/A, Average: N/A");
    return;
  }

  let total = numbers.length;
  let min = numbers[0];
  let max = numbers[0];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];
    sum += n;
    if (n < min) min = n;
    if (n > max) max = n;
  }

  const average = sum / total;

  console.log(`Total Numbers: ${total}, Min Value: ${min}, Max Value: ${max}, Average: ${average}`);
}

//Test cases
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([3, 6, 9, -12, 3, 4, 2, 1]);
minMaxAverage([10, 6, 17, -8, 7, 5, 2]);

// Exercise #2
function countVowels(word) {
  const vowels = "aeiou";
  let count = 0;
  const s = String(word).toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) count++;
  }

  return count;
}

// Test cases
console.log(`Car: ${countVowels("Car")} vowels`);
console.log(`Rodriguez: ${countVowels("Rodriguez")} vowels`);
console.log(`Chicago: ${countVowels("Chicago")} vowels`);

// Exercise #3
function sortNumbers(numbers) {
  const copy = [...numbers];
  copy.sort((a, b) => a - b);
  return copy;
}

//test cases
const a1 = [9, 4, 6, 2];
console.log(`Original Array: [${a1}] Sorted Array: [${sortNumbers(a1)}]`);

const a2 = [6, 7, 5, 25, 3];
console.log(`Original Array: [${a2}] Sorted Array: [${sortNumbers(a2)}]`);

const a3 = [3, 0, 10, -15, 7, 7];
console.log(`Original Array: [${a3}] Sorted Array: [${sortNumbers(a3)}]`);