function findMean(currentClass) {
  let sum = 0;
  currentClass.forEach((element) => {
    if (typeof element === "string" && !isNaN(element)) {
      element = parseFloat(element);
    }
    sum += element;
  });

  return (sum / currentClass.length).toFixed(3);
}

function findMedian(currentClass) {
  currentClass.sort((a, b) => a - b);

  const middle = Math.floor(currentClass.length / 2);

  if (currentClass.length % 2 === 0) {
    return ((currentClass[middle - 1] + currentClass[middle]) / 2).toFixed(3);
  } else {
    return currentClass[middle].toFixed(3);
  }
}

function findMode(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  const numberFrequency = {};

  numbers.forEach((number) => {
    numberFrequency[number] = (numberFrequency[number] || 0) + 1;
  });

  let mode = null;
  let maxFrequency = 0;

  for (const number in numberFrequency) {
    if (numberFrequency[number] > maxFrequency) {
      maxFrequency = numberFrequency[number];
      mode = parseFloat(number);
    }
  }

  return mode.toFixed(3);
}

export { findMean, findMedian, findMode };
