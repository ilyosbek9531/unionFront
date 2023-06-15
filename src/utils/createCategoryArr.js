export const createCategoryArr = (arr) => {
  const sortedArr = arr.reduce((acc, currentNumber) => {
    const lastSubarray = acc[acc.length - 1];

    if (lastSubarray && lastSubarray.length < 6) {
      lastSubarray.push(currentNumber);
    } else {
      acc.push([currentNumber]);
    }

    return acc;
  }, []);
  return sortedArr;
};
