import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

const store = createStore(rootReducer);

// stateが変更されるごとにstateを取得し直してコンソールに表示
store.subscribe(() => console.log(store.getState()));

const session_root = document.getElementById('session-root');

if (session_root) {
  render(
    <Provider store={ store }>
      <App />
    </Provider>,
    session_root
  )
};
