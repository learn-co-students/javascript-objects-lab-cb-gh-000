var recipes = {prop: 1};
var updateObjectWithKeyAndValue = (obj,key,val) => {
  var rec = Object.assign({}, obj);
  rec[key] = val;
  return rec;
};

var destructivelyUpdateObjectWithKeyAndValue = (obj,key,val) => {
  obj[key]=val;
  return obj;
};

var deleteFromObjectByKey = (obj,key) => {
 var rec = Object.assign({},obj);
 delete rec[key];
 return rec;
};

var destructivelyDeleteFromObjectByKey = (obj,key) => {
  delete obj[key];
  return obj;
};