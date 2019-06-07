var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
    var ne = Object.assign({[key]: value}, object)
  return ne
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key){
  var ne = Object.assign({}, object);
  delete ne[key];
  return ne
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
