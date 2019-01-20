export function getIngredientList(type){
  let i = 0;
  const list = [];
  while(type[i] !== undefined){
    // debugger;
    if(type[i].add !== undefined){
      list.push(type[i].name + " " +
                type[i].amount.value + " " +
                type[i].amount.unit + " (" +
                type[i].add +")"
      );
    }else{
      list.push(type[i].name + " " +
                type[i].amount.value + " " +
                type[i].amount.unit
      );
    }
    i++;
  }
  return list;
}

export function getPairing(beer){
  let i = 0;
  const list = [];
  while(beer.food_pairing[i] !== undefined){
      list.push(beer.food_pairing[i]);
    i++;
  }
  return list;
}
