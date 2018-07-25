
module.exports = function(RegiNums,locI){

var RgNums   = RegiNums.split(",");
var anyRgNums  = [];

for(var i=0;i< RgNums.length;i++){
var currentReg = RgNums[i].trim();
if(currentReg.startsWith(locI)){
anyRgNums.push(currentReg);
}
}

  var numOfcars =anyRgNums.length;

  return  numOfcars;


};
