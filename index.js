let recipes = {};

var updateObjectWithKeyAndValue = (object, key, value) => {
  let out_object = Object.assign({}, object);
  out_object[key] = value;
  return out_object
}

var deleteFromObjectByKey = (object, key) => {
  let out_object = Object.assign({}, object);
  delete out_object[key];
  return out_object
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object
}

var destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key];
  return object
}
