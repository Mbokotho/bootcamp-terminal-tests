describe('Fromwhere ', function(){

    it('should state the car is from cape town', function(){
        assert.equal( fromWhere('CA 2259'), 'Cape Town');
    });
    it('should state the car is from Paarl', function(){

        assert.equal( fromWhere('CJ 2259'),'Paarl');
    });
});

let assert = require("assert");
let fromWhere= require("../fromWhere");
