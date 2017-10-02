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

By storing all the state in one location, it becomes easy to see how an application should respond, and by using React components which remain `pure`
the rendered state of the app should be easy to predict.

There are some gotcha's with how to actually structure you state in Redux to make it easy to work with in your application, which I will come onto later.

## State is read-only

This might seem counter intuitive, but what this means is that in order to change the state you must emit or `dispatch` an `action` rather than directly mutating the state.
Actions in Redux and other state management systems like Flux, express an intent to transform the state. An action might look like this:

    {
      type: 'ADD_BLOG_POST',
      post: {
        id: 3,
        title: `three is the magic number`
        content : `...`
      }
    }

If you've never worked with Flux, or Redux before these concepts might be a bit alien, later on I will show an example of how to tie these bits together which to be honest is
probably the most complex bit of Redux.

## State changes happen with pure functions

If an action only describes *what* you want to change in state, how do we actually change it? This is where `reducers` come into play. A `reducer` is a `pure` function which
take the existing state, and the action and return the new state. It's important to remember we are *NOT* changing the existing state here we return a new version of the state
which is copied from the old one.

A reducer function for our blog posts might look something like this:

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

I dropped in the term `pure` function in the previous sentence, if you're not sure what a `pure` function is, it's a function which has no side effects and is predictable in what it does based on it's inputs. A side effect in this context would be something like calling an external API, or retrieving data from a database. The term itself is borrowed from functional programming and Wikipedia goes into more detail if you're interested https://en.wikipedia.org/wiki/Pure_function

## Putting it together

The documentation for Redux is excellent, both clear an simple but there are a few things which I found difficult to grasp when starting out. Mainly these queries were around where to put and how to structure an application with Redux certain files but there were a few added gotchas and questions, including:

- how do I structure my application state?
- how do I split reducers into smaller chunks and then combine them again?
- where and how do I perform async actions or database calls?
- how do I add in middleware?
- where / when should I use react state instead of Redux state?

I will not be able to answer all of these questions in this post, but I will endeavour to answer these in future articles.

## h2

An example

    import { createStore } from 'redux'

    /**
     * This is a reducer, a pure function with (state, action) => state signature.
     * It describes how an action transforms the state into the next state.
     *
     * The shape of the state is up to you: it can be a primitive, an array, an object,
     * or even an Immutable.js data structure. The only important part is that you should
     * not mutate the state object, but return a new object if the state changes.
     *
     * In this example, we use a `switch` statement and strings, but you can use a helper that
     * follows a different convention (such as function maps) if it makes sense for your
     * project.
     */
    function counter(state = 0, action) {
      switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
      }
    }

    // Create a Redux store holding the state of your app.
    // Its API is { subscribe, dispatch, getState }.
    let store = createStore(counter)

    // You can use subscribe() to update the UI in response to state changes.
    // Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
    // However it can also be handy to persist the current state in the localStorage.

    store.subscribe(() =>
      console.log(store.getState())
    )

    // The only way to mutate the internal state is to dispatch an action.
    // The actions can be serialized, logged or stored and later replayed.
    store.dispatch({ type: 'INCREMENT' })
    // 1
    store.dispatch({ type: 'INCREMENT' })
    // 2
    store.dispatch({ type: 'DECREMENT' })
    // 1

##Different from flux because
> Redux doesn't have a Dispatcher or support many stores. Instead, there is just a single store with a single root reducing function. As your app grows, instead of adding stores, you split the root reducer into smaller reducers independently operating on the different parts of the state tree.

#Actions
 - Actions are payloads of information dispatched to the store with `store.dispatch()`.
 - Actions must have a type property that indicates the type of action being performed.
 - Types should typically be defined as string constants.
 - It's a good idea to pass as little data in each action as possible. For example, it's better to pass index than the whole todo object.  E.g.
`{ type: DELETE_USER, id: 1 }` is better than
`{ type: DELETE_USER, user: userObjectToDelete }`

##Action creators
> Action creators are exactly that—functions that create actions. It's easy to conflate the terms “action” and “action creator”

- Action creators are just functions which return an action.
	e.g `function deleteUser(id) { return { type: DELETE_USER, id: id  } }`

In flux, the action creations will often dispatch the action automatically, this is not the case with redux, but you can create **bound action creators** like this:

`const boundAddTodo = (text) => dispatch(addTodo(text))`

More commonly you'll use

#Reducers

Reducers describe how state should change in response to actions.

> The reducer is a pure function that takes the previous state and an action, and returns the next state.

Things you should never do inside a reducer:

- Mutate its arguments;
- Perform side effects like API calls and routing transitions;
- Call non-pure functions, e.g. `Date.now()` or `Math.random()`

A simple reducer may use the `type` property to establish which action to perform and create a new state based on the previous state. e.g.

module.exports = function(state = initialState, action) {

    let nextState = Object.assign({}, state);

    switch(action.type) {
      case 'RATING_MAP/UPDATE_BOUNDS': {
        nextState.bounds = action.bounds;
        return nextState;
      }
      case 'RATING_MAP/UPDATE_UTILITY_TYPE': {
        nextState.utilityType = action.utilityType;
        return nextState;
      }
      default: {
        return state;
      }
    }

Reducers can be combined and reduced so that they can be more easily composed. e.g.

    function todoApp(state = {}, action) {
      return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
      }
    }

Where `visibilityFilter` is a function that operates on `state.visibilityFilter` or it's own segment of the state. These functions could be split into separate files.

###Combine reducers

> Redux provides a utility called combineReducers()

    import { combineReducers } from 'redux'

    const todoApp = combineReducers({
      visibilityFilter,
      todos
    })

    export default todoApp

#Store

There is only one store in a redux app and it holds your application state.






