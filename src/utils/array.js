function findElement(arr, data) {
  return arr.find((item) => item.id === data.id);
}

function getIndexElement(arr, element) {
  return arr.indexOf(element);
}

export function findByIndex(arr, data) {
  const element = findElement(arr, data);
  return getIndexElement(arr, element);
}

export function removeByIndexOf(arr, data) {
  const element = findElement(arr, data);
  const index = getIndexElement(arr, element);
  arr.splice(index, 1);
}
