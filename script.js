function twoNumberSum(array, targetSum) {
  // O(n^2) time | O(1) space
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) return [firstNum, secondNum];
    }
  }
  return [];
}
