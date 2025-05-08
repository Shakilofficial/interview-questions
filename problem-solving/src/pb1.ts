function showAverageTemperatures(
  temps: number[],
  questions: [number, number][]
): void {
  // * Store the prefix sum of the temperatures
  const totalUpTo: number[] = [0];

  // * Calculate the prefix sum of the temperatures
  for (let i = 0; i < temps.length; i++) {
    totalUpTo[i + 1] = totalUpTo[i]! + temps[i]!;
  }

  // * Go through each question
  for (const [start, end] of questions) {
    // * Get the sum of the temperatures between the start and end
    const sum = totalUpTo[end]! - totalUpTo[start - 1]!;

    // * Calculate the average temperature between the start and end
    const avg = sum / (end - start + 1);

    // * Print the average temperature
    console.log(avg.toFixed(2));
  }
}

// * Sample temperatures and questions
const temps = [2, 4, 6, 8, 10];
const questions: [number, number][] = [
  [1, 3],
  [2, 5],
  [1, 5],
];

// Run the function with input
showAverageTemperatures(temps, questions);
