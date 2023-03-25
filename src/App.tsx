import React from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "./redux/store";
import TodoLists from "./components/TodoLists";
import { addTodo, TodosType } from "./redux/todoSlice";
import "./styles/app.scss";
import EmptyList from "./components/EmptyList";

function App() {
  const dispatch = useAppDispatch();
  const { todos } = useSelector(({ todos }: RootState) => todos);

  const [text, setText] = React.useState<string>("");

  const setInputVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addNewTodo = () => {
    const id = todos.length !== 0 ? todos[todos.length - 1].id + 1 : 1;
    dispatch(addTodo({ id, text, isCompleted: false }));
  };

  return (
    <div className="main">
      <div className="inputContainer">
        <input type="text" onChange={setInputVal} value={text} />
        <button onClick={addNewTodo}>Add</button>
      </div>
      <div className="AllTodosContainer">
        {todos.length === 0 ? (
          <EmptyList />
        ) : (
          todos.map((obj: TodosType) => {
            return <TodoLists key={obj.id} {...obj} />;
          })
        )}
      </div>
    </div>
  );
}

export default App;
