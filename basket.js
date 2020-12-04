function basket(bookArray) {
  const price = 8;

  let booksToFilter = bookArray;
  let bookGroups = [];

  while (booksToFilter.length > 0) {
    const bookToInterigate = booksToFilter.shift();
    let found = false;

    for(let i = 0; i < bookGroups.length; i++) {
      if(!bookGroups[i].includes(bookToInterigate)){
        found = true;
        bookGroups[i] = [...bookGroups[i], bookToInterigate];
        break;
      }
    }
      if(!found) {
        bookGroups = [...bookGroups, [bookToInterigate]];
      }
  }
  const priceArray = [];

  for(var i = 0; i < bookGroups.length; i++){
    const noneDiscountedPrice = price * bookGroups[i].length
    
    if(bookGroups[i].length === 2){
      priceArray.push(noneDiscountedPrice - (noneDiscountedPrice) * 0.05);
    }
    else if(bookGroups[i].length === 3){
      priceArray.push(noneDiscountedPrice - (noneDiscountedPrice) * 0.1);
    }
    else if(bookGroups[i].length === 4){
      priceArray.push(noneDiscountedPrice - (noneDiscountedPrice) * 0.2);
    }
    else if(bookGroups[i].length === 5){
      priceArray.push(noneDiscountedPrice - (noneDiscountedPrice) * 0.25);
    }
    else{
      priceArray.push(noneDiscountedPrice);
    }
  }
  const result = priceArray.reduce((acc, val) => acc + val, 0);
  return result;
}

module.exports = basket;



