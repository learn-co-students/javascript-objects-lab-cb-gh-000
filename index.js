var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var newValue = Object.assign({}, object)
  newValue[key] = value
  return newValue
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newValue = Object.assign({}, object)
  delete newValue[key]
  return newValue
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
