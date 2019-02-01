//相邻的元素进行比较
function bubbleSort (arr) {
  let max = arr.length - 1;
  for (let i = 0; i < max; i++) {
    // 声明一个变量，作为标志位
    let done = true;
    for (let j = 0; j < max - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        done = false;
      }
    }
    if (done) {
      break;
    }
  }
  return arr;
}
