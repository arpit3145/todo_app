import './App.css';
// components
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

function App() {
  return (
    <>
    <div className='w-[50%] m-[auto]'>
      <Header/>
      <TodoForm/>
      <Todo/>
    </div>
    </>
  );
}

export default App;
