---
path: "/understanding-redux"
date: "2017-08-09T13:04:10.962Z"
title: "Understanding redux"
tags: [react, redux, state]
---

## Intro
This article assumes you have a working knowledge of React and limited knowledge of what Redux is!
I try to flesh out what Redux is and how you might use it within a React project.

## What is it?

At a high level Redux is a JavaScript library which you can use with React,
it is one of several solutions to help you manage application state on the client.

Redux attempts to make state mutations predictable by enforcing three core principles:

- State has a single source of truth
- State is read-only
- State changes happen with pure functions

## State has a single source of truth

Redux stores the whole state of your application in a single `store`. You can view the store like a state tree
which is in reality just a JavaScript object.

For example, an app storing blog posts might have a state tree which looks like this:
```javascript
{
  posts: [
    {
      id: 1,
      title: `my first blog post`,
      content: `...`
    },
    {
      id: 2,
      title: `another blog post`,
      content: `...`
    }
  ]
}
```
By storing all the state in one location, it becomes easy to see how an application should respond, and by using React components which remain `pure`
the rendered state of the app should be easy to predict.

There are some gotcha's with how to actually structure you state in Redux to make it easy to work with in your application, which I will come onto later.

## State is read-only

This might seem counter intuitive, but what this means is that in order to change the state you must emit or `dispatch` an `action` rather than directly mutating the state.
Actions in Redux and other state management systems like Flux, express an intent to transform the state. An action might look like this:

```javascript
{
  type: 'ADD_BLOG_POST',
  post: {
    id: 3,
    title: `three is the magic number`
    content : `...`
  }
}
```

If you've never worked with Flux, or Redux before these concepts might be a bit alien, later on I will show an example of how to tie these bits together which to be honest is
probably the most complex bit of Redux.

## State changes happen with pure functions

If an action only describes *what* you want to change in state, how do we actually change it? This is where `reducers` come into play. A `reducer` is a `pure` function which
take the existing state, and the action and return the new state. It's important to remember we are *NOT* changing the existing state here we return a new version of the state
which is copied from the old one.

A reducer function for our blog posts might look something like this:

```javascript
const blogPostReducer = (state = {}, action) => {

  // this copied our old state into a new object so as not to mutate it
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case: `ADD_BLOG_POST`:

        // this may look like a mutation
        // but we're not changing the old state
        // only the new state.
        nextState.posts.push(action.post);

        return newState;
      break;
    default:
      return nextState;
  }
}
```

I dropped in the term `pure` function in the previous sentence, if you're not sure what a `pure` function is, it's a function which has no side effects and is predictable in what it does based on it's inputs. A side effect in this context would be something like calling an external API, or retrieving data from a database. The term itself is borrowed from functional programming and Wikipedia goes into more detail if you're interested https://en.wikipedia.org/wiki/Pure_function

## Putting it together

The documentation for Redux is excellent, both clear an simple but there are a few things which I found difficult to grasp when starting out. Mainly these queries were around where to put and how to structure an application with Redux certain files but there were a few added gotchas and questions, including:

- how do I structure my application state?
- how do I split reducers into smaller chunks and then combine them again?
- where and how do I perform async actions or database calls?
- how do I add in middleware?
- where / when should I use react state instead of Redux state?

I will not be able to answer all of these questions in this post, but I will endeavour to answer these in future articles.






