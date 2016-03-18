describe('City Filter', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        $filter = $injector.get('$filter');
    }));

    it('should filter on city correctly', function () {
       var mockedList = [{
           name: 'Test',
           location: {
             city: 'Pittsburgh'
           }
       }, {
           name: 'Test 2',
           location: {
             city: 'New York'
           }
       }, {
           name: 'Test 3',
           location: {
             city: 'Chicago'
           }
       }];

        var results = $filter('city')(mockedList, 'Chicago');

        expect(results.length).toBe(1);
        expect(results[0].name).toBe('Test 3');
    });
});
