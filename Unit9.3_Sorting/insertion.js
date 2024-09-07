function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
  
      for (let j = i - 1; j > -1 && arr[j] > value; j--) {
        arr[j + 1] = arr[j];
      }
  
      arr[j + 1] = value;
    }
  
    console.log(arr);
  }
  let nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]
  insertionSort(nums);