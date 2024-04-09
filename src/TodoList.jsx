import React from "react";
import TodoListItem from "./TodoListItem";
import styled from "styled-components";

const TodoListBlock = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <TodoListBlock>
      {todos.map((item, index) => (
        <TodoListItem
          item={item}
          key={index}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
