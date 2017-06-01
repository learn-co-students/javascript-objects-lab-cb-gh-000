var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key]:value });
}

function deleteFromObjectByKey(object, key) {
  var objectClone = Object.assign({}, object);
  delete objectClone[key];
  return objectClone;
}
