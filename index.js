var recipes = {
  prop: 1,
  //prop2 : 2
};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({}, object);
  obj[key] = value;
  
  return obj;
}
updateObjectWithKeyAndValue(recipes, "prop2", 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
destructivelyUpdateObjectWithKeyAndValue(recipes, "prop2", 2);

function deleteFromObjectByKey(object, key) {
  var obj = Object.assign({}, object);
  delete obj[key];
  return obj;
}
deleteFromObjectByKey(recipes, "prop2");

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
destructivelyDeleteFromObjectByKey(recipes, "prop2");