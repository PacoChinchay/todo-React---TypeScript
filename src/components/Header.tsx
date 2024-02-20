import { type Todo as TodoType } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: Pick<TodoType, 'title'>) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>Todo</h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
