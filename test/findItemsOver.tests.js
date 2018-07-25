
let assert = require("assert");
let findItemsOver = require("../findItemsOver");


describe('findItemsOver', function(){

    it('should return all the names of items more than tresh hold', function(){
        assert.deepEqual([{"name":"pears","qty":37},{"name":"bananas","qty":27}], findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27}],20
      ));
    });
    it('should return all the names of items more than tresh hold', function(){
        assert.deepEqual([], findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27}]
      ));
    });


});
