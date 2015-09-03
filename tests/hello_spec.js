describe("Hello", function() {

	it("says hello", function() {
		expect(sayHello()).toBe("Hello world!");	
	});

	it("sas hello to reciever", function() {
		expect(sayHelloToReciever('Jane')).toBe("Hello, Jane!");
	});

});