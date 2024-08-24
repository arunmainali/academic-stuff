function commonElements(arr1, arr2) {
  let commonElementsArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonElementsArr.push(arr1[i]);
    }
  }

  return commonElementsArr;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];

console.log(`The common elements are: ${commonElements(array1, array2)}`);
