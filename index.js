var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
    var ne = Object.assign({key: value}, object)
  return ne
}

/*function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return
}*/
