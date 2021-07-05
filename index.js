var recipes = {breakfast: 'bacon, eggs' };

function updateObjectWithKeyAndValue (recipes, key, value) {
  return Object.assign({}, recipes, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  recipes[key] = value;

  return recipes
}

function deleteFromObjectByKey (recipes, key) {
  var clone = Object.assign({}, recipes, {key});
  delete clone[key];

  return clone
}

function destructivelyDeleteFromObjectByKey (recipes, key) {
  delete recipes[key]

  return recipes
}
