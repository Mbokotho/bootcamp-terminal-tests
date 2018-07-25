module.exports = function(RegNums){
var RgNums   = RegNums.split(", ");
var pRgNums  =[];
  console.log(RegNums);

  for(var i=0;i<RgNums.length;i++){
      var RgNum  = RgNums[i];


  if(RgNum.startsWith('CJ')){

    pRgNums.push(RgNums[i]);


  }
}
  var numOfcars =pRgNums.length;

  return  numOfcars;


}
