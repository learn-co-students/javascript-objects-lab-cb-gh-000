var recipes = new Object();

function updateObjectWithKeyAndValue(recipes, key, value) {
  var recipes = { prop: 1 }

  recipes[key] = value

  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value

  return recipes
}

function deleteFromObjectByKey(recipes, key) {
  var obj = { prop: 1 }

  var newObj = Object.assign({}, obj)

  delete newObj.prop

  return newObj
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key]

  return recipes
}


updateObjectWithKeyAndValue(recipes, 'prop2', 2)
destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', 2)
deleteFromObjectByKey(recipes, 'prop')
destructivelyDeleteFromObjectByKey(recipes, 'prop')
