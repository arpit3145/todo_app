import React, { useEffect } from "react";
import { getAllTodos } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";

const Todo = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) =>
     state.todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <ul className="list-disc">
      {!todos.length == 0 ? 
           <>
        {todos.map((todo)=>(
        <TodoList
          todo ={todo}
          key={todo._id}
        />
       
      ))}
      </>
      :
      <div className="text-center text-5xl"> No TODO Found</div>
       }
      
      </ul>
    </div>
  );
};

export default Todo;
