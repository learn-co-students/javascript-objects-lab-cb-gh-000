var recipes = {"recipe1" : "this is recipe1"}

function updateObjectWithKeyAndValue(obj, key, value)
{
  var newObj = Object.assign({}, obj, {[key] : value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value)
{
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key)
{
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, key)
{
  delete obj[key]
  return obj
}

console.log(deleteFromObjectByKey(recipes, 'recipe1'));
delete recipes.recipe1
