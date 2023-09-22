import './App.css'
import Header from './Components/Header/Header.jsx';
import Todo from './Components/Todo/Todo.jsx';

function App() {

  return (
    <div className="container">
      <Header />
      <main>
        <Todo />
      </main>
    </div>
  )
}

export default App
