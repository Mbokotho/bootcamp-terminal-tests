
let assert = require("assert");
let isFromBellville = require("../isFromBellville");
describe('isFromBellville', function(){

    it('should indentify car correctly and return true if its from bellville', function(){
        assert.equal(isFromBellville('CY4666'),true);
    });
    it('should identify car correctlyreturn false if its not from bellville', function(){

        assert.equal(isFromBellville('CF444'),false);
    });


});
