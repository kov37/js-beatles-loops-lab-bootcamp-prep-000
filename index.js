function theBeatlesPlay(array, instruments){
  arr = [];
  for (var i= 0; i < array.length; i++){
    arr.push(`${array[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(array){
  newarr = [];
  i = 0;
  while (array.length !== i){
    newarr.push(array[i] + "!!!")
    i++; 
  }
  return newarr;
}