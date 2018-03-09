// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = JSON.parse(localStorage.getItem('state')) || [];

  var highestId = 0;
  // get highest id of states
  if (state.length > 0) {
    var copyOfState = JSON.parse(JSON.stringify((state)));
    var lastTodoItem = copyOfState.sort(function(a, b) {
      return a.id - b.id;
    }).pop();
    highestId = lastTodoItem.id;
  }
  

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(item) {
    var todoNode = document.createElement('li');
    todoNode.setAttribute('id', item.id);
    todoNode.setAttribute('class', 'clearfix');

    // add span holding description
    var descriptionSpan = document.createElement('span');
    descriptionSpan.appendChild(document.createTextNode(item.description));
    todoNode.appendChild(descriptionSpan);
    
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, item.id);
      update(newState);
    });
    deleteButtonNode.classList.add('button__delete');
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markToDoButton = document.createElement('button');
    markToDoButton.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, item.id);
      update(newState);
    });
    markToDoButton.classList.add('button__done');
 
    todoNode.appendChild(markToDoButton);

    return todoNode;
  };  

  // this creates a sort button and appends it to the form element
  var createSortButton = function() {
    var sortItems = document.createElement('button');
    sortItems.appendChild(document.createTextNode('Sort by uncomplete'));
    sortItems.addEventListener('click', function(event) {
      event.preventDefault();
      var newState = todoFunctions.sortTodos(state, function(a, b) {
        return a.done - b.done;
      });
      update(newState);
    });
    document.getElementById('js-sortby').appendChild(sortItems);
  }
 
  // 
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
      highestId++; // increment id of new node to be created
      var newState = todoFunctions.addTodo(state, event.target[0].value, highestId);
      this.reset(); // clears from
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    localStorage.setItem('state', JSON.stringify(state));
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(item) {
      todoListNode.appendChild(createTodoNode(item));
    });
      
    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);

    // after container has been populated with new li's
    // apply styles to the li's
    state.forEach(function(item) {
      var li = document.getElementById(item.id);
      if (item.done) {
        li.childNodes.item(0).classList.add('marked-done');       
      } else {
        li.childNodes.item(0).classList.remove('marked-done');
      }
    });
  };


  if (container) {
    renderState(state);
    createSortButton();
  }
})();