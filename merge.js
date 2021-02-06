function merge(arr1, arr2) {
  let combined = [];
  for(let index in arr1) { combined.push(arr1[index]); }
  for(let index in arr2) { combined.push(arr2[index]); }

  return combined.sort((a,b) => {
    return a - b;
  })
}