import { useState, useEffect } from 'react';
import styled from "styled-components";
import Modal from './common/Modal';
import { ProfileProps } from '../types/ProfileData';


const ParticipationInfo = (props:ProfileProps) => {

  const nickname = props.profile.nickname;
  const personnel = props.writing.personnel;
  const price = props.writing.price;

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [count, setIsCount] = useState<number>(0);

  const justifyContentStyle = count > personnel ? "center" : "space-between";

  const openModal = () => {
      setModalOpen(true);
  }
  const closeModal = () => {
    if (count <= personnel)
      setIsCount(count => count+1);

    setModalOpen(false);
  }

  return (
    <ParticipationInfoWrapper justifyContentStyle={justifyContentStyle} >
      {count <= personnel ? (
        <>
      <St.ParticipationInfoContainer>
        <div>
          현재 참여현황 ({count}/4)
        </div>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold"}}>
          {price}원
        </div>
      </St.ParticipationInfoContainer>
      <St.ParticipationButtonContainer>
        <StChatButton>채팅하기</StChatButton>
        <StApplicationButton onClick={openModal}>신청하기</StApplicationButton>
        <Modal isOpen={modalOpen}>
          <h2>수업이 신청되었습니다!</h2>
          <div style={{marginBottom:"30px"}}>{nickname} 선생님 수업 신청 완료</div>
          <StConfirmButton onClick={closeModal}>확인</StConfirmButton>
        </Modal>
      </St.ParticipationButtonContainer>
        </>
      ):(
        <h3>신청이 마감되었습니다.</h3>
      )}
    </ParticipationInfoWrapper>
  );
};

export default ParticipationInfo;

const ParticipationInfoWrapper = styled.div<{ justifyContentStyle: string }>`
  height: 4rem;

  display: flex;
  justify-content: ${(props) => props.justifyContentStyle};
  align-items: center;
  flex-shrink: 0;

  padding: 1rem 0;

  border-top: 0.1rem solid #E6E6E6;
`;

const St = {
  ParticipationInfoContainer: styled.div`
  `,
  ParticipationButtonContainer: styled.div`
    display: flex;
  `,
  CommonButton: styled.button`
    margin: 0 0.1rem;
    padding: 1rem;

    border: none;
    border-radius: 0.8rem;

    font-size: 1rem;
    font-weight: bold;

    cursor: pointer;
  `,

}

const StChatButton = styled(St.CommonButton)`
  background-color: #E6E6E6;
`

const StApplicationButton = styled(St.CommonButton)`
  background-color: #FBD262;
`

const StConfirmButton = styled(St.CommonButton)`
  width: 100%;

  background-color: #FBD262;
`

