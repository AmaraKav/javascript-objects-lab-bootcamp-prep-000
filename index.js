var recipes = {
  
};

function updateObjectWithKeyAndValue(object, key, value){
  var old = key.value;
  return Object.assign({}, object, {[key]:value});
}