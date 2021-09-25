import React from 'react'
import styles from '../TodoList/TodoList.scss'
import Filter from '../TodoList/Filter'
import TodoItem from '../TodoList/TodoItem'
import Form from '../TodoList/Form'
import useTodoList from '../../hooks/useTodoList'
import { useSelector, useDispatch } from 'react-redux'
import { rootState } from '../../store';
import {addTodo,deleteTodo,switchTodoDoneStatus,switchFilterDoneTodo} from '../../actions/todo'
import { ConsoleWriter } from 'istanbul-lib-report'
const TodoListRedux = () => {
  const dispatch = useDispatch()
  return (
    <div className={styles.layout}>
      <div className={styles.todoListWrapper}>
        <div className={styles.header}>
          <span className={styles.title}>TodoListRedux</span>
          <span className={styles.subTitle}>Here is a simple todo list</span>
        </div>
        <Filter filterDoneTodo={useSelector((state:rootState) => state.filterDoneTodo)} switchFilterDoneTodo={()=>dispatch(switchFilterDoneTodo())} />
        <div className={styles.todoList}>
          {useSelector((state:rootState) => state.displayTodos).map((todo) => (
            <TodoItem 
            key={todo.id}
            todo ={todo}
            switchTodoDoneStatus = {(id)=>dispatch(switchTodoDoneStatus(id))}
            deleteTodo = {(id)=>dispatch(deleteTodo(id))}
            />
          ))}
        </div>
      <Form addTodo={(todo)=>dispatch(addTodo(todo))} />
      </div>
    </div>
  )
}

export default TodoListRedux
