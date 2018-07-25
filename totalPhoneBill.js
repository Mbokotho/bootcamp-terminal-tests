module.exports = function(Comms){
var comms = Comms.split(', ')
var total = 0;

for(var i=0;i<comms.length;i++){

 switch(comms[i]){
   case "call":
  total += 2.75;
   break;
   case "sms":
   total += 0.65;
     break;


 }
}return 'R'+total.toFixed(2);
}
