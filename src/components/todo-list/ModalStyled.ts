import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalBlockStyled = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 2px;
  background-color: #ffffff;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalTitleDate = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  position: relative;
  padding: 14px 10px;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const ModalBlockInnerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 10px;
  height: 100%;
`;

export const ModalTodoListStyled = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ModalTodoListInputStyled = styled.input``;

export const ModalTodoListTextStyled = styled.div`
  font-size: 14px;
  color: #a0abfd;
  font-weight: bold;
`;

export const ModalInfoStyled = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding: 14px 10px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
