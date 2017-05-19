var recipes = {}

const updateObjectWithKeyAndValue = (object, key, value) => {
  const newObject = Object.assign({}, object)
  newObject[key] = value
  return newObject
}

const destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value
  return object
}

const deleteFromObjectByKey = (object, key) => {
  let newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

const destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key]
  return object
}
