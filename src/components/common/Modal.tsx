import styled from "styled-components";
import { ModalProps } from "../../types/ModalProps";

const Modal = (props:ModalProps) => {
  const { isOpen, children } = props;

  if(!isOpen) return null;

  return (
    <ModalWrapper isopen={isOpen}>
      <ModalContainer>
        {children}
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div<{ isopen: boolean }>`
  width: 100%;
  height: 100%;  

  position: fixed;
  top: 0;
  left: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.isopen ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding: 30px;
  
  background-color: #ffffff;

  border-radius: 1rem;
`