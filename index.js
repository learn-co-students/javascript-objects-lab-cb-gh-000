var recipes = {}

function updateObjectWithKeyAndValue(object, key, values) {
  return Object.assign({}, object, {[key] : values})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  return Object.assign(delete object.key, {})
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
