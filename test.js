var test = require("tape");
var logic = require("./logic");

var state = [
  { id: -3, description: "first todo", done: false },
  { id: -2, description: "second todo", done: false },
  { id: -1, description: "third todo", done: false }
];

test("Testing Tape is working", function(t) {
  t.equal(1, 1, "One should equal one");
  t.end();
});

// TESTS FOR ADD FUNCTION
test("addTodo", function(t) {
  var description = "this as a todo";
  var actual = logic.addTodo(state, description, 1);
  var expected = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: false },
    { id: 1, description: "this as a todo", done: false }
  ];
  t.deepEquals(actual, expected, "The return object is a new state");
  t.end();
});
test("addTodo", function(t) {
  var description = "this as a todo";
  var actual = typeof logic.addTodo(state, description);
  var expected = typeof state;
  t.deepEquals(actual, expected, "The output is the same type as the state");
  t.end();
});
test("addTodo", function(t) {
  var description = "this as a todo";
  var actual = logic.addTodo(state, description).length;
  var expected = state.length + 1;
  t.deepEquals(actual, expected, "The states given has not changed length");
  t.end();
});
test("addTodo", function(t) {
  var description = "this as a todo";
  var actual = typeof logic.addTodo(state, description).pop();
  var expected = "object";
  t.deepEquals(actual, expected, "Last item is an object");
  t.end();
});
test("addTodo", function(t) {
  var description = "this as a todo";
  var actual = logic.addTodo([], description).length;
  var expected = 1;
  t.deepEquals(
    actual,
    expected,
    "When states is empty the new state returned has 1 item"
  );
  t.end();
});

// TESTS FOR DELETE FUNCTION

test("deleteTodo", function(t) {
  var actual = logic.deleteTodo(state, -1);
  var expected = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false }
  ];
  t.deepEquals(
    actual,
    expected,
    "Should delete item id=-1 from array, instead got: " + actual
  );
  t.end();
});

test("deleteTodo", function(t) {
  var actual = logic.deleteTodo(state, -2);
  var expected = [
    { id: -3, description: "first todo", done: false },
    { id: -1, description: "third todo", done: false }
  ];
  t.deepEquals(
    actual,
    expected,
    "Should delete item id=-2 from array, instead got: " + actual
  );
  t.end();
});

test("deleteTodo", function(t) {
  var actual = logic.deleteTodo(
    [{ id: -1, description: "third todo", done: false }],
    -1
  );
  var expected = [];
  t.deepEquals(
    actual,
    expected,
    "If only one item in array, should return empty array, instead got: " +
      actual
  );
  t.end();
});

test("deleteTodo", function(t) {
  var actual = Array.isArray(logic.deleteTodo(state, -3));
  var expected = true;
  t.deepEquals(
    actual,
    expected,
    "If more than one item in array, should result true is an array, instead got: " +
      actual
  );
  t.end();
});

test("deleteTodo", function(t) {
  var actual = Array.isArray(
    logic.deleteTodo([{ id: -1, description: "third todo", done: false }], -1)
  );
  var expected = true;
  t.deepEquals(
    actual,
    expected,
    "If just one item in array, should result true is an array, instead got: " +
      actual
  );
  t.end();
});

test("deleteTodo", function(t) {
  var actual = logic.deleteTodo(state, -2).length;
  var expected = state.length - 1;
  t.deepEquals(
    actual,
    expected,
    "Length of resulting array should be original array length - 1, instead got: " +
      actual
  );
  t.end();
});

test("deleteTodo", function(t) {
  var actual = logic.deleteTodo(
    [{ id: -3, description: "first todo", done: false }],
    -3
  ).length;
  var expected = 0;
  t.deepEquals(
    actual,
    expected,
    "If input array length == 1, resulting array length should == 0, instead got : " +
      actual
  );
  t.end();
});

test("deleteTodo", function(t) {
  var actual = logic.deleteTodo(state, -1).length;
  var expected = state.length - 1;
  t.equals(actual, expected, "The states is not mutated");
  t.end();
});

// TESTS FOR MARKTODO

test("markTodo", function(t) {
  var actual = logic.markTodo(state, -1);
  var expected = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: true }
  ];
  t.deepEquals(
    actual,
    expected,
    "Function should toggle item id=-1 from false to true, instead got : " +
      actual
  );
  t.end();
});

test("markTodo", function(t) {
  var actual = logic.markTodo(state, -3);
  var expected = [
    { id: -3, description: "first todo", done: true },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: false }
  ];
  t.deepEquals(
    actual,
    expected,
    "Function should toggle item id=-3 from false to true, instead got : " +
      actual
  );
  t.end();
});

test("markTodo", function(t) {
  var actual = logic.markTodo(
    [
      { id: -3, description: "first todo", done: true },
      { id: -2, description: "second todo", done: false },
      { id: -1, description: "third todo", done: false }
    ],
    -3
  );
  var expected = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: false }
  ];
  t.deepEquals(
    actual,
    expected,
    "Function should toggle item id=-3 from true to false, instead got : " +
      actual
  );
  t.end();
});

test("markTodo", function(t) {
  var actual = logic.markTodo(state, -1)[2].done;
  var expected = state[2].done;
  t.notDeepEqual(actual, expected, "Function should not mutate state");
  t.end();
});

// TESTS FOR SORT FUNCTION

var sortState = [
  { id: -1, description: "a this is not done", done: false },
  { id: -2, description: "b this is done", done: true },
  { id: -3, description: "c this is not done", done: false },
  { id: -4, description: "d this is not done", done: false },
  { id: -5, description: "e this is done", done: true },
  { id: -6, description: "f this is done", done: true },
  { id: -7, description: "g this is not done", done: false },
  { id: -8, description: "h this is done", done: true },
  { id: -9, description: "i this is not done", done: false }
];

test("sortTodos", function(t) {
  var actual = logic.sortTodos(sortState, (a, b) => a.done - b.done);
  var expected = [
    { id: -1, description: "a this is not done", done: false },
    { id: -3, description: "c this is not done", done: false },
    { id: -4, description: "d this is not done", done: false },
    { id: -7, description: "g this is not done", done: false },
    { id: -9, description: "i this is not done", done: false },
    { id: -2, description: "b this is done", done: true },
    { id: -5, description: "e this is done", done: true },
    { id: -6, description: "f this is done", done: true },
    { id: -8, description: "h this is done", done: true }
  ];
  t.deepEquals(
    actual,
    expected,
    "Should return array sorted by done status, instead got: " + actual
  );
  t.end();
});

test("sortTodos", function(t) {
  var actual = logic.sortTodos(sortState, (a, b) => a.done - b.done).length;
  var expected = sortState.length;
  t.deepEquals(
    actual,
    expected,
    "Function should return array of same length as input array, instead got : " +
      actual
  );
  t.end();
});

test("sortTodos", function(t) {
  var actual = Array.isArray(
    logic.sortTodos(sortState, (a, b) => a.done - b.done)
  );
  var expected = true;
  t.deepEquals(
    actual,
    expected,
    "Function should return array, instead got : " + actual
  );
  t.end();
});
test("sortTodos", function(t) {
  var globalState = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: true }
  ];
  var expectedState = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: true }
  ];

  logic.sortTodos(globalState);

  var actual = globalState;
  var expected = expectedState;

  t.deepEquals(actual, expected, "Function does not mutate original state");
  t.end();
});
