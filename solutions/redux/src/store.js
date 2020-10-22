function counter(state, action) {
    if (!state || !Number.isInteger( state.count)) {
      return {...state, count: 0}
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

  function message(state, action) {
    if (!state || typeof state.message !== 'string') {
      return {...state, message: ''}
    }

    switch (action.type) {
      case 'MESSAGE_UPDATE':
        return {...state, message: action.message} 

      default:
        return state
    }
  }

const rootReducer = Redux.combineReducers({
  counter,
  message
})  

var store = Redux.createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )