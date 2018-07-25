

let assert = require("assert");
let transportFee = require("../transportFee");

describe('Which shift', function(){

    it('should tell how much to pay in the morning', function(){
        assert.equal(transportFee('morning'),'R20');
    });
    it('should tell how much to pay in the afternoon', function(){

        assert.equal(transportFee('afternoon'),'R10');
    });
});
