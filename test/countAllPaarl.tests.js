

let assert = require("assert");
let countAllPaarl= require("../countAllPaarl");

describe('countAllPaarl', function(){

    it('should tell number of cars frm town', function(){
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'),3);
    });
    it('should tell how many cars r frm paarl', function(){

        assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123'),2);
    });
});
