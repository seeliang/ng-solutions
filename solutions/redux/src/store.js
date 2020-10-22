function counter(state, action) {
    if (typeof state === 'undefined') {
      return {count: 0}
    }

    switch (action.type) {
      case 'COUNT_INCREMENT':
        return {...state, count: state.count + 1} 
      case 'COUNT_DECREMENT':
        return {...state, count: state.count - 1} 
      default:
        return state
    }
  }

var store = Redux.createStore(
    counter,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )