var $ = require('jquery');
var Person = require('./modules/Person')

var john = new Person('John Doe', 'Blue');
var jane = new Person('Jane Smith', 'Red');
john.greet();
jane.greet();
