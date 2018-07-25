

let assert = require("assert");
let regCheck = require("../regCheck");



describe('regCheck', function(){

    it('should indentify regNumber correctly', function(){
        assert.equal(regCheck('CY4666','ND'),false);
    });
    it('should identify regNumber correctly', function(){

        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });
});
