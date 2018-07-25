module.exports= function(list,tresh){

  var fruits = [];
  for(var i=0; i<list.length; i++)
  {
    if(list[i].qty > tresh)
    {
      	fruits.push(list[i]);
    }
  }
  return fruits;
}
