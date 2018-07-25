
let assert = require("assert");
let yearsAgo= require("../yearsAgo");

describe(' yearsAgo', function(){

    it('should say how many years ago', function(){
        assert.equal(yearsAgo(2006),12);
    });
    it('should say how many years ago', function(){

        assert.equal(yearsAgo(1992),26);
    });
});
