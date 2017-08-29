var recipes = new Object();

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({}, object, {[key]: value});
}

function deleteFromObjectByKey(object, key){
  const object_temp = Object.assign({}, object)
  delete object_temp[key];
  return object_temp;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
