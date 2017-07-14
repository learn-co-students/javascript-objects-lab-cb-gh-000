var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
    var out = Object.assign({}, object, {[key] : value});
    return out;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var out = Object.assign({}, object);
  delete out[key];
  return out;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
