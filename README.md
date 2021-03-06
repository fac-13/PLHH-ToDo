# PLHH-ToDo

The amazing PLHH team have come together to present to you... [the to do app](https://fac-13.github.io/PLHH-ToDo/)!

## What we've done
It has satisfied the following **user stories** (for the disorganised person):
- [x] They can enter tasks they need to do in a web page so they don't forget
- [x] They can view the tasks added in a list to plan their day
- [x] Mark tasks as complete so they can focus on the tasks left (and be able to mark it as incomplete afterwards too)
- [x] They can delete the task completely from the list
- [x] The buttons are pretty large so they can hit the right target with their thumb 👍

ALSO we have managed to complete some **stretch goals**! 🎖
- [x] Local storage has been used so even if the user refreshes the page they can still see their todos
- [x] A sort by button: which sorts the to-dos still needed to be done (and the to-dos marked as done is shuffled to the bottom)
- [x] Edit the to-dos so that the user can amend them if the task changes (and is still saved to local storage)

Stretch goals we discussed for the future:
- [ ] Click on any part of a to-do to mark it as complete so that it's easier for them to check to-dos off
- [ ] Conditional sort button: only show the sort by doneness button if to do has more than two items
- [ ] Mark items with high/medium/low priority and sort by priority
- [ ] Animations
- [ ] Have CSS/JS for when there are no to-do items

## How we've done it

### Day one
Before lunch: we all reviewed the skeleton code 💀to try and make sense of it. One person made the remote git repo, uploaded the skeleton code, did `npm install` and updated the `package.json` file. We then decided we would try to tackle the logic.js tasks before the end of the day.

Our group split up into two pairs and one pair focused on the ```addTodo``` function, whilst the other pair focused on the `deleteTodo` function. After we finished, we explained what we did to the other pair. We used the TDD methodology and tried to include edge cases too 👍

After that we switched our pairs around, and one pair completed the tasks on logic.js (including the `markTodo` and `sortTodos` functions). The other pair worked on the DOM.js file. They worked on the `createTodoNode` function, and managed to create a `li` item with the appropriate description inside, that also had a delete and marked-done button.

By the end of the day we managed to complete our tasks and then walked through the code with the other pair 👏

### Day two
We looked at the project and made several issues that we thought were important to complete.
One pair focused on trying to solve a major bug, where we couldn't mark an item done and then undone again.
The other pair refactored the logic.js file, and added more tests (including, importantly, the test to check whether the functions would change global variables or not - to ensure they were pure functions).
Before lunch we completed the tasks and did a code review 🤜🤛

After lunch we switched the pairs around again. One pair focused on the CSS styling and HTML refactoring (so that we had an 💯 accessibility score), whilst the other pair focused on making sort-by button, and linking the sortby function in logic.js to the DOM. The latter pair also completed the stretch goal involving local storage (involving re-writing the function that generated id's to prevent duplicate id's after refresh.)

At the end of the day we explained all the code to each other, made sure the main issues were resolved and there were no merge conflicts, and high-fived 👋

### Day three
We added tags to the issues, then discussed as a group how to split the issues and who would fix which issues. One pair also managed to complete the stretch goal of being able to edit the to-dos description (and it is still saved to local storage)

## What we did well
- TDD methodology, we kept to a strict concept of doing the tests first before writing the functions
- Pair switch up, we managed to switch up who we were working with frequently
- Using git, we made very specific issues, made branches for them and after the issue was complete we merged the branch, deleted the branch and closed the issue. This meant we hardly had any merge conflicts, the remote code was regularly updated, and the number of issues and branches were kept under control.
- We decided to work from a develop branch - and smaller branches would be merged into the develop branch. Only on the final hour did we merge the develop branch into the master branch.
- We regularly met up and explained the code to each other.
- Everyone would review and approve the pull request before the last person to review would merged the branch.

## What we struggled with 
- Adopting state ids for the local storage
- Updating state after making the description editable