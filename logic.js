var todoFunctions = {
  
  //cloneArrayOfObjects will create a copy of the todos array 
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo){
      return JSON.parse(JSON.stringify(todo));
    });
  },
  
  // ADDTODO: returns a new array, it should contain todos with the newTodo added to the end.
  addTodo: function(todos, description, start) {
    var newTodo = {
      id: start,
      description: description,
      done: false
    };
    var copyOfTodo = todos.concat(newTodo);

    return copyOfTodo;
  },

  // DELETETODO: returns a new array, this should not contain any todo with an id of idToDelete
  deleteTodo: function(todos, idToDelete) {
    if (todos.length === 1) {
      return [];
    }
    var todosCopy = this.cloneArrayOfObjects(todos);
    return todosCopy.filter(function(item) {
      if (item.id !== idToDelete) return item;
    });
  },

  // MARKTODO: marks the item as done
  markTodo: function(todos, idToMark) {
    var todosCopy = this.cloneArrayOfObjects(todos);
    console.log(todosCopy);
    return todosCopy.map(function(item) {
      if (item.id === idToMark) {
        item.done = !item.done;
      }
      return item;
    });

  },

  // SORTBY: sorts the item by incomplete
  sortTodos: function(todos, sortFunction) {
    
    var todosCopy = this.cloneArrayOfObjects(todos);
    return todosCopy.sort(sortFunction);

  },
};

if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}