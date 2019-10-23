let recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value){
  let newRec = Object.assign({}, object, {[key]:value})
  return newRec;
}

updateObjectWithKeyAndValue(recipes, 'prop2', 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]:value});
}

function deleteFromObjectByKey(object, key){
  let newObje = Object.assign({}, recipes);
  delete newObje[key];
  return newObje;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}
