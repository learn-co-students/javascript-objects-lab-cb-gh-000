const recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipes = Object.assign({}, object, {[key]: value})
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
 var newRecipe = Object.assign({}, object[key]);
 return newRecipe;
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key];
  return object;
}
