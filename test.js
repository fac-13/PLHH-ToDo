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


// TESTS FOR ADD FUNCTION



// TESTS FOR DELETE FUNCTION

test('Deletes an item with id=-1', function(t){
  var actual = logic.deleteTodo(state, -1);
  var expected = [
    { id: -3, description: 'first todo', done: false },
    { id: -2, description: 'second todo', done: false }
  ];
  t.deepEquals(actual, expected, 'Should delete item id=-1 from array, instead got: ' + actual);
  t.end()
});

test('Deletes an item with id=-2', function(t){
  var actual = logic.deleteTodo(state, -2);
  var expected = [
    { id: -3, description: 'first todo', done: false },
    { id: -1, description: 'third todo', done: false }
  ];
  t.deepEquals(actual, expected, 'Should delete item id=-2 from array, instead got: ' + actual);
  t.end()
});

test('Delete when there is only one item', function(t){
  var actual = logic.deleteTodo([
    { id: -1, description: 'third todo', done: false }
  ], -1);
  var expected = '';
  t.equal(actual, expected, 'If only one item in array, should return empty string, instead got: ' + actual);
  t.end()
});

test('If more than one item in array, should result instanceof array', function(t){
  var actual = logic.deleteTodo(state, -3) instanceof Array;
  var expected = true;
  t.equal(actual, expected, 'If more than one item in array, should result instanceof array, instead got: ' + actual);
  t.end()
});

test('If just one item in array, should result typeof string', function(t){
  var actual = typeof logic.deleteTodo([
    { id: -1, description: 'third todo', done: false }
  ], -1);
  var expected = 'string';
  t.equal(actual, expected, 'If just one item in array, should result typeof string, instead got: ' + actual);
  t.end()
});