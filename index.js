var recipes = { breakfast: "granola" }

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  // obj[key] = value
  obj.key = value
  obj[key] = value
  return obj
  // return obj[key] = value
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'maxi', 'ziga')
{
  breakfast: 'granola',
  key: 'ziga'
}
