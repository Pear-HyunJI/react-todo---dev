import React from "react";
import styled from "styled-components";

const TodoHeaderBlock = styled.div`
  h1 {
    height: 4rem;
    background: #22b8cf;
    color: #fff;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TodoHeader = () => {
  return (
    <TodoHeaderBlock>
      <h1>일정관리 앱</h1>
    </TodoHeaderBlock>
  );
};

export default TodoHeader;
