
var recipes = {
  food: 'ham',
};

function updateObjectWithKeyAndValue(object, key, value) {
  var recipes2 = Object.assign({}, object, { prop2: value });
  return recipes2;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var temp = Object.assign({}, object);
  delete temp[key];
  return temp;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
