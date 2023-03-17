import React from "react";
import {
  ModalStyled,
  ModalBlockStyled,
  ModalBlockInnerStyled,
  ModalTodoListStyled,
  ModalTodoListInputStyled,
  ModalTodoListTextStyled,
  ModalTitleDate,
  ModalInfoStyled,
} from "./ModalStyled";
import { Storage } from "../../storage/Storage";

interface IModal {
  toggleModal: any;
  date: any;
  setModal: any;
}

const Modal: React.FC<IModal> = ({ toggleModal, date, setModal }) => {
  const getElement = (e: any) => console.log(e);

  return (
    <ModalStyled onClick={() => setModal(false)}>
      <ModalBlockStyled onClick={(e) => e.stopPropagation()}>
        <ModalTitleDate>{date}</ModalTitleDate>
        <ModalBlockInnerStyled>
          {Storage.filter((item: any) => item.date === date)[0]?.items.map(
            (el: string, index: number) => (
              <ModalTodoListStyled key={index}>
                <ModalTodoListInputStyled
                  onClick={() => getElement(el)}
                  type="checkbox"
                />
                <ModalTodoListTextStyled>{el}</ModalTodoListTextStyled>
              </ModalTodoListStyled>
            )
          )}
        </ModalBlockInnerStyled>
        <ModalInfoStyled>
          <div>5 tasks</div>
          <div>
            <button>Add new +</button>
            <button onClick={toggleModal}>Close</button>
          </div>
        </ModalInfoStyled>
      </ModalBlockStyled>
    </ModalStyled>
  );
};

export { Modal };
