var recipes = {
  prop : "hey"
}

var updateObjectWithKeyAndValue = (object, key, value) => {
  var newObj = Object.assign({}, object)
  return Object.assign(newObj, { [key]: value })
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign(object, { [key]: value })
}

var deleteFromObjectByKey = (recipes, key) => {
  var newObj = Object.assign({}, recipes)
  delete newObj.prop
  return newObj
}

var destructivelyDeleteFromObjectByKey = (recipes, key) => {
  delete recipes.prop
  return recipes
}
