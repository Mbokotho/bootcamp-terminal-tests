

let assert = require("assert");
let countAllFromTown= require("../countAllFromTown");


describe('CounntAllFromTown', function(){

    it('should tell number of cars frm town', function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);
    });
    it('should tell how many cars r frm town', function(){

        assert.equal(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 3411','CF'),1);
    });
});
