

let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('totalPhoneBill', function(){

    it('should calculate total phone bill', function(){
        assert.equal( totalPhoneBill('call, call, call'), 'R8.25');
    });
    it('should calculate total  phone bill', function(){

        assert.equal( totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
    });
});
