import { type Todo as TodoType } from '../types'
import { useState } from 'react'

interface Props {
  saveTodo: ({ title }: Pick<TodoType, 'title'>) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
       className="new-todo"
       value={inputValue}
       onChange={(e) => { setInputValue(e.target.value) }}
       placeholder="¿Qué quieres hacer hoy?"
       autoFocus
      />
    </form>
  )
}
