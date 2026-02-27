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

