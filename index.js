const testVar = {}

function testFunc() {
  return "hi"
}

function isWin(obj) {
  return obj.result === 'W'
}

function superbowlWin(array) {
  let result = array.find(isWin)
  if (!!result) {
    return result.year
  } else {
    result
  }
}
