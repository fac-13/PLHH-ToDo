# PLHH-ToDo

The amazing PLHH team have come together to present to you... [the to do app](https://fac-13.github.io/PLHH-ToDo/)!

## What we've done
It has satisfied the following **user stories** (for the disorganised person):
- [x] They can enter tasts they need to do in a web page so they don't forget
- [x] They can view the tasks added in a list to plan their day
- [x] Mark tasks as complete so they can focus on the tasks left (and be able to mark it as uncomplete afterwards too)
- [x] They can delete the task completely from the list
- [x] The buttons are pretty large so they can hit the right target with their thumb 👍

ALSO we have managed to complete some **stretch goals**! 🎖
- [x] Local storage as been used so even if the user refreshes the page they can still see their todos
- [x] A sort by button: which sorts the to-dos still needed to be done (and the to-dos marked as done is shuffled to the bottom)

## How we've done it

### Day one
Before lunch: we all reviewed the skeleton code 💀to try and make sense of it. We decided we would try to tackle the logic.js tasks before the end of the day.

Our group split up into two pairs and one pair focused on the ```addTodo``` function, whilst the other pair focused on the `deleteTodo` function. After we finished, we explained what we did to the other pair. We used the TDD methodology and tried to include edge casees too 👍

After that we switched our pairs around, and one pair completed the tasks on logic.js (including the `markTodo` and `sortTodos` functions). The other pair worked on the DOM.js file. They worked on the `createTodoNode` function, and managed to create a `li` item with the appropriate description inside, that also had a delete and marked-done button.

By the end of the day we managed to complete our tasks and then walk through the code with the other pair 👏

### Day two
We looked at the project and made several issues that we thought were important to complete.
One pair focused on trying to solve a major bug, where we couldn't mark an item done and then undone again.
The other pair refactored the logic.js file, and added more tests (including, importantly, the test to check whether the functions would change global variables or not - to ensure they were pure functions).
Before lunch we completed the tasks and did a code review 🤜🤛

After lunch we switched the pairs around again. One pair focused on the CSS styling and HTML refactoring (so that we had an 100% accessibility score), whilst the other pair focused on making sort-by button, and linking the sortby function in logic.js to the DOM. The latter pair also completed the stretch goal involving local storage (involving re-writing the function that generated id's to prevent duplicate id's after refresh.)

At the end of the day we explained all the code to each other, made sure the main issues were resolved and there were no merge conflicts, and high-fived 👋
