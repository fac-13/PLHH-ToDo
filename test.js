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
  t.deepEqual(
    logic.addTodo(state, description, 1),
    [
      { id: -3, description: "first todo", done: false },
      { id: -2, description: "second todo", done: false },
      { id: -1, description: "third todo", done: false },
      { id: 1, description: "this as a todo", done: false }
    ],
    "The return object is a new state"
  );
  t.equal(
    typeof logic.addTodo(state, description),
    typeof state,
    "The output is the same type as the state"
  );
  t.equal(
    logic.addTodo(state, description).length,
    state.length + 1,
    "The states given has not changed length"
  );
  t.equal(
    typeof logic.addTodo(state, description).pop(),
    "object",
    "Last item is an object"
  );
  t.equal(
    logic.addTodo([], description).length,
    1,
    "When states is empty the new state returned has 1 item"
  );
  t.end();
});

// TESTS FOR DELETE FUNCTION

test("deleteTodo", function(t) {
  t.deepEquals(
    logic.deleteTodo(state, -1),
    [
      { id: -3, description: "first todo", done: false },
      { id: -2, description: "second todo", done: false }
    ],
    "Should delete item id=-1 from array"
  );
  t.deepEquals(
    logic.deleteTodo(state, -2),
    [
      { id: -3, description: "first todo", done: false },
      { id: -1, description: "third todo", done: false }
    ],
    "Should delete item id=-2 from array, instead got"
  );
  t.deepEquals(
    logic.deleteTodo([{ id: -1, description: "third todo", done: false }], -1),
    [],
    "If only one item in array, should return empty array"
  );
  t.deepEquals(
    Array.isArray(logic.deleteTodo(state, -3)),
    true,
    "If more than one item in array, should result true is an array."
  );
  t.deepEquals(
    Array.isArray(
      logic.deleteTodo([{ id: -1, description: "third todo", done: false }], -1)
    ),
    true,
    "If just one item in array, should result true is an array."
  );
  t.deepEquals(
    logic.deleteTodo(state, -2).length,
    state.length - 1,
    "Length of resulting array should be original array length - 1."
  );
  t.deepEquals(
    logic.deleteTodo([{ id: -3, description: "first todo", done: false }], -3)
      .length,
    0,
    "If input array length == 1, resulting array length should == 0."
  );
  t.equals(
    logic.deleteTodo(state, -1).length,
    state.length - 1,
    "The states is not mutated"
  );
  t.end();
});

// TESTS FOR MARKTODO

test("markTodo", function(t) {
  t.deepEquals(
    logic.markTodo(state, -1),
    [
      { id: -3, description: "first todo", done: false },
      { id: -2, description: "second todo", done: false },
      { id: -1, description: "third todo", done: true }
    ],
    "Function should toggle item id=-1 from false to true."
  );
  t.deepEquals(
    logic.markTodo(state, -3),
    [
      { id: -3, description: "first todo", done: true },
      { id: -2, description: "second todo", done: false },
      { id: -1, description: "third todo", done: false }
    ],
    "Function should toggle item id=-3 from false to true."
  );
  t.deepEquals(
    logic.markTodo(
      [
        { id: -3, description: "first todo", done: true },
        { id: -2, description: "second todo", done: false },
        { id: -1, description: "third todo", done: false }
      ],
      -3
    ),
    [
      { id: -3, description: "first todo", done: false },
      { id: -2, description: "second todo", done: false },
      { id: -1, description: "third todo", done: false }
    ],
    "Function should toggle item id=-3 from true to false."
  );
  t.notDeepEqual(
    logic.markTodo(state, -1)[2].done,
    state[2].done,
    "Function should not mutate state"
  );
  t.end();
});

// TESTS FOR SORT FUNCTION

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
  t.deepEquals(
    logic.sortTodos(sortState, function(a, b) {
      return a.done - b.done;
    }),
    [
      { id: -1, description: "a this is not done", done: false },
      { id: -3, description: "c this is not done", done: false },
      { id: -4, description: "d this is not done", done: false },
      { id: -7, description: "g this is not done", done: false },
      { id: -9, description: "i this is not done", done: false },
      { id: -2, description: "b this is done", done: true },
      { id: -5, description: "e this is done", done: true },
      { id: -6, description: "f this is done", done: true },
      { id: -8, description: "h this is done", done: true }
    ],
    "Should return array sorted by done status."
  );
  t.deepEquals(
    logic.sortTodos(sortState, function(a, b) {
      return a.done - b.done;
    }).length,
    sortState.length,
    "Function should return array of same length as input array."
  );
  t.deepEquals(
    Array.isArray(
      logic.sortTodos(sortState, function(a, b) {
        return a.done - b.done;
      })
    ),
    true,
    "Function should return array."
  );
  logic.sortTodos(globalState);
  t.deepEquals(
    globalState,
    expectedState,
    "Function does not mutate original state"
  );
  t.end();
});

test("Test objects with done properties equal to true will be last in array", function (t) {
  var arrOfObj = [ { done: true }, { done: false }, { done: true }, { done: false }, { done: false } ];
  var actual = arrOfObj.sort(logic.sortByDone);
  var expected = [ { done: false }, { done: false }, { done: false }, { done: true }, { done: true } ];
  t.deepEquals(actual, expected, 'Should move all true, done objects to the end off array');
  t.end();
});