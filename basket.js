//const uniqueBookCount = require('./uniqueBooks');

var price = 8

var unique = (value, index, self) => {
  return self.indexOf(value) === index
  }

function basket(arr) {
  var uniqueCount = arr.filter(unique).length

  if(uniqueCount === 2){
    return (price * arr.length) - ((price * uniqueCount) * 0.05)
  }
  else if(uniqueCount === 3){
    return (price * arr.length) - ((price * uniqueCount) * 0.1)
  }
  else if(uniqueCount === 4){
    return (price * arr.length) - ((price * uniqueCount) * 0.2)
  }
  else if(uniqueCount === 5){
    return (price * arr.length) - ((price * uniqueCount) * 0.25)
  }
  else return (price * arr.length)
}

module.exports = basket;



