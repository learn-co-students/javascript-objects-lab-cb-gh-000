var recipes= {}
function updateObjectWithKeyAndValue(obj,key,value){
  return Object.assign({}, obj,{[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  return Object.assign( obj,{[key]: value})
}

function deleteFromObjectByKey(obj,key){
  delete obj[key]
  return obj;
}
function deleteFromObjectByKey(obj,key){
  const copiedObject= Object.assign({},obj);
  delete copiedObject[key];
  return copiedObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object;
}
function  destructivelyDeleteFromObjectByKey(object, key){

}
