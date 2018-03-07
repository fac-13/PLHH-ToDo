var test = require('tape');
var logic = require('./logic');


var state = [
  { id: -3, description: 'first todo', done: false },
  { id: -2, description: 'second todo', done: false },
  { id: -1, description: 'third todo', done: false },
];


test('Testing Tape is working', function(t) {  
  t.equal(1, 1, "One should equal one");
  t.end();
});

// TESTS FOR ADD FUNCTION
test('addTodo', function(t) {
  var description = 'this as a todo';  
  t.deepEqual(logic.addTodo(state, description), [
    { id: -3, description: 'first todo', done: false },
  { id: -2, description: 'second todo', done: false },
  { id: -1, description: 'third todo', done: false },
  { id: 1, description: 'this as a todo', done: false },
  ], "The return object is a new state");
  t.equal(typeof logic.addTodo(state, description), typeof state, "The output is the same type as the state");
  t.equal(logic.addTodo(state, description).length, state.length + 1, 'The states given has not changed length');
  t.equal(typeof logic.addTodo(state, description).pop(), 'object', "Last item is an object");
  t.equal(logic.addTodo([], description).length, 1, 'When states is empty the new state returned has 1 item');
  t.end();
});

// TESTS FOR DELETE FUNCTION