
function updateObjectWithKeyAndValue( object, key, value) {
  
  return Object.assign({}, object, {key: value})
  
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  object.key = value 
  
  return object 
  
}

function deleteFromObjectByKey(object, key) {
  
  var newl = Object.assign({}, object) 
  delete newl.key 
  return newl 
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
  delete object.key 
  return object 
  
}
