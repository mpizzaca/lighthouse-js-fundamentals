function concat(arr1, arr2) {
  let result = [];
  for(let index in arr1) { result.push(arr1[index]); }
  for(let index in arr2) { result.push(arr2[index]); }
  return result;
}