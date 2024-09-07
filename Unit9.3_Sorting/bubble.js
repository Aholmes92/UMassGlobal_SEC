function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]){
            let hold = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = hold;
        }
        console.log(arr);
    }
}
let nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
bubbleSort(nums);