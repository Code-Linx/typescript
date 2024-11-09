// src/index.ts

/**
 * Calculate the average of an array of numbers.
 * @param scores Array of numbers
 * @returns Average of the scores
 */
function calculateAverage(scores: number[]): number {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

/**
 * Check if a student has passed based on their average score.
 * @param average The average score
 * @param passingScore The minimum score required to pass
 * @returns Whether the student passed or failed
 */
function hasPassed(average: number, passingScore: number = 50): boolean {
  return average >= passingScore;
}

// Example usage
const scores = [75, 82, 91, 60, 58];
const average = calculateAverage(scores);
console.log(`Average score: ${average}`);
console.log(`Status: ${hasPassed(average) ? "Passed" : "Failed"}`);
