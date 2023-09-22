import './todo.css'
import { useState } from 'react';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';

const mockData = [
  { text: 'Todo task 1', done: false, id: 1 },
  { text: 'Todo task 2', done: true, id: 2  },
  { text: 'Todo task 3', done: false, id: 3  },
  { text: 'Todo task 4', done: false, id: 4  },
  { text: 'Todo task 5', done: false, id: 5  }
]

export default function Todo() {
  const [list, setList] = useState(mockData)
  return (
    <section className="todo">
      <TodoForm updateList={(item) => setList([...list, item])} />
      <TodoList list={list} updateList={(list) => setList(list)} />
    </section>
  )
}