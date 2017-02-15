var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key] = value;
   return object;
}
function deleteFromObjectByKey(object, key){
  var p =  Object.assign({},object);
  delete p[key];
  return p;
}

function destructivelyDeleteFromObjectByKey(object, key){
   delete object[key];
   return object;
}