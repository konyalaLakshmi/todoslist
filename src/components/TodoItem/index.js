import React from 'react'

import SimpleTodos from '../SimpleTodos'

import './index.css'

const TodoItem = props => {
  const {details, deleteTodo} = props
  const {id, title} = details

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list">
      <p className="p">{title}</p>
      <button type="button" className="b" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
