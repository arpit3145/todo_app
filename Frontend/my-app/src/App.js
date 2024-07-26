import './App.css';
// components
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
    <div className='w-[50%] m-[auto]'>
    <ToastContainer/>
      <Header/>
      <TodoForm/>
      <Todo/>
      
    </div>
    </>
  );
}

export default App;
