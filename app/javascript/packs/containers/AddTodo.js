import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input;
  return(
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input ref={ node => input = node } />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

/*
単純にdispatchだけアサインする場合は、connectに引数は必要なし。
https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
*/

export default connect()(AddTodo)
