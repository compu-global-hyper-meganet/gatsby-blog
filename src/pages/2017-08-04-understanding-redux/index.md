---
path: "/understanding-redux"
date: "2017-08-09T13:04:10.962Z"
title: "Understanding redux"
tags: [react, redux, state]
---

## Intro
>Is a predictable state container for react

## What is it?

- The whole state of your app is stored in an object tree inside a single store.
- The only way to change the state tree is to emit an action, an object describing what happened.
- To specify how the actions transform the state tree, you write pure reducers.

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






