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

test('Deleting an item', function(t){
  var actual = logic.deleteTodo(state, -1);
  var expected = [
    { id: -3, description: 'first todo', done: false },
    { id: -2, description: 'second todo', done: false },
  ];
  t.equal(actual, expected, 'Should delete from array, instead got' + actual);
  t.end()
});