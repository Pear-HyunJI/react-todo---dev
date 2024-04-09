import React from "react";
import styled from "styled-components";

const TodoFooterBlock = styled.div`
  padding: 30px;
  text-align: center;
  button {
    background: #000;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    margin: 0 10px;
  }
`;

const TodoFooter = ({ onFinishRemove, onAllRemove }) => {
  return (
    <TodoFooterBlock>
      <button type="button" onClick={onFinishRemove}>
        완료일정 삭제
      </button>
      <button type="button" onClick={onAllRemove}>
        전체 삭제
      </button>
    </TodoFooterBlock>
  );
};

export default TodoFooter;
