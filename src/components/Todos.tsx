import { type Todo as TodoType, type ListOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: (id: string) => void
  onToggleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompletedTodo }) => {
  return (
    <ul className='todo-list'>
      {
        todos.map(todo => (
          <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
            <Todo
              key = {todo.id}
              id = {todo.id}
              title = {todo.title}
              completed = {todo.completed}
              onRemoveTodo = {onRemoveTodo}
              onToggleCompletedTodo = {onToggleCompletedTodo}
            />
          </li>
        ))
      }
    </ul>
  )
}
