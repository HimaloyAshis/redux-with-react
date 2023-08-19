
import './App.css'
import Counter from './components/Counter'
import TodosAction from './services/Action/TodosAction'


function App() {
 

  return (
    <>
      <div className='app'>
        <h1>welcome to react redux</h1>
        <Counter></Counter>
        <TodosAction></TodosAction>
      </div>
    </>
  )
}

export default App
