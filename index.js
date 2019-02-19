var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value){
  var anotherObject = Object.assign({}, object, {[key] : value});
  return anotherObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  return Object.assign(delete object.key, {})
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
