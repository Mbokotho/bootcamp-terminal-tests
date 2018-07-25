
let assert = require("assert");
let isWeekday = require("../isWeekday");


describe('isWeekday', function(){

    it('should tell wether its weekend or not', function(){
        assert.equal(isWeekday('Sunday'),false );
    });
    it('should tell wether  its weekend or not', function(){

        assert.equal(isWeekday('Tuesday'), true);
    });
});
