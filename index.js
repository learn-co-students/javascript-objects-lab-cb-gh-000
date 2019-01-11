var recipes={};

function updateObjectWithKeyAndValue(object, key, value)
{
 return Object.assign({},object,{[key]:value})
 
}

function destructivelyUpdateObjectWithKeyAndValue(object,key, value)
{
  object[key]=value;
  return object;
}


function deleteFromObjectByKey(object, key)
{
  var pinky=Object.assign({},object);
  delete pinky[key];
  return pinky;
}


function destructivelyDeleteFromObjectByKey(object, key)
{
  
  delete object[key];
  return object;
}
