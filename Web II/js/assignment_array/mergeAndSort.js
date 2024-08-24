
function mergeAndSort(arr1, arr2) {

  let mergedArray = arr1.concat(arr2);

  // binary sort
 for (let i = 0; i < mergedArray.length; i++) {
    for (let j = 0; j < mergedArray.length - 1; j++) {

      if (mergedArray[j] > mergedArray[j + 1]) {
        let temp = mergedArray[j];
        mergedArray[j] = mergedArray[j + 1];
        mergedArray[j + 1] = temp;
      }
    }
  } 

  return mergedArray;
}

let array1 = [2, 5, 7, 4];
let array2 = [4, 8, 3, 5, 7];

console.log(`Merged and sorted: ${mergeAndSort(array1, array2)}`);

