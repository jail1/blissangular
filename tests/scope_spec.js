/*  jshint globalstrict: true */
/* global Scope: false */
'use strict'; 

describe("scope", function() {

	it("Can be constructed and used as an object", function() {
		var scope       = {  };
		scope.aProperty = 1;

		expect(scope.aProperty).toBe(1);
	});

	describe("digest", function() {
		var scope;
		beforeEach(function() {
			scope = new Scope();
		});

		it("calls the listener function of a watch on first $digest", function() {
			var watchFn = function() { return 'wat'; }
			var listenerFn = jasmine.createSpy();
			scope.$watch(watchFn, listenerFn);

			scope.$digest();

			expect(listenerFn).toHaveBeenCalled();
		});

	});

});