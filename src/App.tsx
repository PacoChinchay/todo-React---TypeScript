import { useState } from 'react'
import { Todos } from './components/Todos'
import { type FilterValue, type Todo as TodoType } from './types.ts'
import { TODO_FILTERS } from './consts.ts'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'

const mockTodos = [
  {
    id: '1',
    title: 'ver el tutorial',
    completed: false
  },
  {
    id: '2',
    title: 'seguirlo al píe de la letra',
    completed: true
  },
  {
    id: '3',
    title: 'descubrir  y arregalr bugs',
    completed: false
  }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length

  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({ title }: Pick<TodoType, 'title'>): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo}></Header>
      <Todos onToggleCompletedTodo={handleCompleted} onRemoveTodo={handleRemove} todos={filteredTodos} />
      <Footer filterSelected={filterSelected} handleFilterChange={handleFilterChange} activeCount={activeCount} completedCount={completedCount} onClearCompleted={handleRemoveCompleted} />
    </div>
  )
}

export default App
