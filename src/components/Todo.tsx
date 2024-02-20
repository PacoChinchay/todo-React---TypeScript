import { type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: (id: string) => void
  onToggleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed' >) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompletedTodo }) => {
  return (
    <div className='view'>
      <input
      type='checkbox'
      checked={completed}
      className='toggle'
      onChange={(event) => {
        onToggleCompletedTodo({ id, completed: event.target.checked })
      }}
      />
      <label>{title}</label>
      <button className='destroy' onClick={() => {
        onRemoveTodo(id)
      }} />
    </div>
  )
}
