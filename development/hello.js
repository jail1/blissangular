function sayHello() {
	return "Hello world!";
}

function sayHelloToReciever(to) {
	return _.template('Hello, <%= name %>!')({ name: to });
}