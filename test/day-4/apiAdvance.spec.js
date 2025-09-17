describe(' testing hooks di mocha', function() {
    before(function() {
        // runs once before the first test in this block
        console.log('before jalan disini');
    });

    after(function() {
        // runs once after the last test in this block
        console.log('after jalan disini');
    });
    
    beforeEach(function() {
        // runs before each test in this block
        console.log('before each jalan disini');
    });

    afterEach(function() {
        // runs after each test in this block
        console.log('after each jalan disini');
    });

    // test cases
    describe('test case 1', function() {
        it('test 1', function() {
            let a = 1;
        });
        
        it('test 2', function() {
            let a = 1;  
        });
    });
});