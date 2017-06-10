var recipes = new Object({Ind: 'chicken'})

function updateObjectWithKeyAndValue(object, key, value){
  var res = Object.assign({}, object, { [key]: value})
  return res
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  Object.assign(object, { [key]: value})
  return object
}

function deleteFromObjectByKey(object, key){
  var res = Object.assign({}, object)
  delete res.prop;
  return res
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.prop;
  return object
}
