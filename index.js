const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

function recursiveIteration(array, index = 0) {
  // Ваш код тут
  if (index === array.length) return;
  console.log(array[index]);
  index++;
  recursiveIteration(array, index);
}

recursiveIteration(arr);
