function updateObjectWithKeyAndValue(object, key, value){
  var nuObj = Object.assign({}, object, {[key]: value})
  return nuObj

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var clon = Object.assign({}, object)
  delete clon[key]
  return clon
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
