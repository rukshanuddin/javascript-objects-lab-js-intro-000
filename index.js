var recipes ={}

function updateObjectWithKeyAndValue(object, key, value){
  object [key] = value
  var newObj = Object.assign({}, object)
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object [key] = value
  return object
}

function destructivelyDeleteFromObjectByKey(object, key, value){
  delete object.key
  return object
}
