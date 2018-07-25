
module.exports =function(list){
  console.log(list);
 var Items = [];
  for(var i=0; i<list.length; i++)
 {
   if(list[i].qty > 20 )
   {
      	Items.push(list[i]);
    }
 }
 return Items;
}
