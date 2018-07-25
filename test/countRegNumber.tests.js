describe('countRegNumber', function(){

    it('should say how many reg numbers', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3 );
    });
    it('should say how many reg numbers', function(){

        assert.equal(countRegNumber('CA 182736,CY 523519'), 2);
    });
});

let assert = require("assert");
let countRegNumber = require("../countRegNumber");
