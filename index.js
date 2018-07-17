var recipes = new Object()
var new_object
var updateObjectWithKeyAndValue = (object,key,value) =>{
  object[key] = value
  return object

}

var updateObjectWithKeyAndValue = (object,key,value) =>{
   new_object = Object.assign(object,{},{key:value})
  return new_object
}


var destructivelyDeleteFromObjectByKey = (object, key) =>{
  delete object[key]
}

var deleteFromObjectByKey = (object, key) =>{
  new_object = Object.assign({},object)
  delete new_object[key]
  return new_object
}


var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) =>{
  object[key] = value
  return object
}

var updateObjectWithKeyAndValue = (object, key, value) =>{
  new_object = Object.assign({},object)
  new_object[key] = value
  return new_object
}


var destructivelyDeleteFromObjectByKey = (object, key) =>{
  delete object[key]
  return object
}
