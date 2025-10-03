// 1.
function mergeArrays(a, b) {
  const newArr = [...new Set([...a, ...b])];
  const sortedArr = newArr.sort((a, b) => a - b);
  return sortedArr;
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]));
