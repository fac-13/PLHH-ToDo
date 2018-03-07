var test = require('tape');
var logic = require('./logic');


var state = [
  { id: -3, description: 'first todo', done: false },
  { id: -2, description: 'second todo', done: false },
  { id: -1, description: 'third todo', done: false },
];


test('Testing Tape is eorking', function(t) {  
  t.equal(1, 1, "One should equal one");
  t.end();
});