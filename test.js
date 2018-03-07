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

test('Delete item when there is only one item', function(t){
  var actual = logic.deleteTodo([
    { id: -1, description: 'third todo', done: false }
  ], -1);
  var expected = [];
  t.deepEquals(actual, expected, 'If only one item in array, should return empty array, instead got: ' + actual);
  t.end()
});

test('If more than one item in array, should result true is an array', function(t){
  var actual = Array.isArray(logic.deleteTodo(state, -3));
  var expected = true;
  t.deepEquals(actual, expected, 'If more than one item in array, should result true is an array, instead got: ' + actual);
  t.end()
});

test('If just one item in array, should result true is an array', function(t){
  var actual = Array.isArray(logic.deleteTodo([
    { id: -1, description: 'third todo', done: false }
  ], -1));
  var expected = true;
  t.deepEquals(actual, expected, 'If just one item in array, should result true is an array, instead got: ' + actual);
  t.end()
});

test('Length of resulting array should be original array length - 1', function(t){
  var actual = logic.deleteTodo(state, -2).length;
  var expected = state.length - 1;
  t.deepEquals(actual, expected, 'Length of resulting array should be original array length - 1, instead got: ' + actual);
  t.end()
});

test('If input array length == 1, resulting array length should == 0', function(t){
  var actual = logic.deleteTodo([{ id: -3, description: 'first todo', done: false }], -3).length;
  var expected = 0;
  t.deepEquals(actual, expected, 'If input array length == 1, resulting array length should == 0, instead got : ' + actual);
  t.end()
});
