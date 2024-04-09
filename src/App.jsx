import React, { useState, useRef, useEffect, useCallback } from "react";
import TodoHeader from "./TodoHeader";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

const App = () => {
  const id = useRef(1);
  const [todos, setTodos] = useState([
    // { id:1, text:"일정관리1", checked:true },
  ]);

  const onInsert = useCallback(
    (value) => {
      const todo = { id: id.current, text: value, checked: false };
      id.current = id.current + 1;
      console.log(id.current);
      // setTodos(todos.concat(todo))
      setTodos([...todos, todo]);
      localStorage.todos = JSON.stringify([...todos, todo]);
      localStorage.id = JSON.stringify(id.current);
      console.log(todos);
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((item) =>
          item.id == id ? { ...item, checked: !item.checked } : item
        )
      );
      localStorage.todos = JSON.stringify(
        todos.map((item) =>
          item.id == id ? { ...item, checked: !item.checked } : item
        )
      );
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((item) => item.id !== id));
      localStorage.todos = JSON.stringify(
        todos.filter((item) => item.id !== id)
      );
    },
    [todos]
  );

  useEffect(() => {
    const localtodos = localStorage.todos;
    const localid = localStorage.id;
    if (localtodos) {
      setTodos(JSON.parse(localtodos));
      id.current = JSON.parse(localid);
    }
  }, []);

  // const onFinishRemove = useCallback(
  //   () => {}, []);
  // const onAllRemove = useCallback(() => {}, []);

  const onFinishRemove = useCallback(() => {
    setTodos(todos.filter((todo) => !todo.checked));
    localStorage.todos = JSON.stringify(todos.filter((todo) => !todo.checked));
  }, [todos]);

  const onAllRemove = useCallback(() => {
    setTodos([]);
    localStorage.removeItem("todos");
  }, []);

  return (
    <TodoTemplate>
      <TodoHeader />
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      <TodoFooter onFinishRemove={onFinishRemove} onAllRemove={onAllRemove} />
    </TodoTemplate>
  );
};

export default App;
