import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import TodoList from './views/TodoList/TodoList'
import TodoListRedux from './views/Todo-redux/TodoList'
import Todo from './views/Todo/Todo'

import store from './store'
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/redux" component={TodoListRedux} />
        <Route exact path="/todo/:id" component={Todo} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
