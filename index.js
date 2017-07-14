var recipes = {}

function updateObjectWithKeyAndValue(obj, key, val) {
  var copy = Object.assign({}, obj)
  copy[key] = val
  return copy
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  obj[key] = val
  return obj
}

function deleteFromObjectByKey(obj, key) {
  var copy = Object.assign({}, obj)
  delete copy[key]
  return copy
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}
