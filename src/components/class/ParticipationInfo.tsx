import { useState } from 'react';
import styled from "styled-components";
import Modal from '../common/Modal';
import { ProfileProps } from '../../types/ProfileData';

const ParticipationInfo = (props:ProfileProps) => {

  const nickname = props.profile.nickname;
  const personnel = props.writing.personnel;
  const price = props.writing.price;

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [isApplied, setIsApplied] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'apply' | 'cancel' | ''>('');

  const justifyContentStyle = count > personnel ? "center" : "space-between";

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const handleApplication = () => {
    if(isApplied)
      setModalType('cancel');
    else{
      if (count < personnel) {
        setCount((prevCount) => prevCount + 1);
        setIsApplied(true);
        setModalType('apply');
      }
    }
    setModalOpen(true); 
  };

  const handleCancelApplication = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
    setIsApplied(false);
    setModalOpen(false);
  }

  return (
    <ParticipationInfoWrapper justifycontentstyle={ justifyContentStyle } >
      {count <= personnel ? (
        <>
          <St.ParticipationInfoContainer>
            <St.ParticipationInfoText> 현재 참여현황 ({count}/{personnel})</St.ParticipationInfoText>
            <St.ParticipationInfoPrice>{price}원</St.ParticipationInfoPrice>
          </St.ParticipationInfoContainer>
          <St.ParticipationButtonContainer>
            <StChatButton>채팅하기</StChatButton>
            <StApplicationButton onClick={handleApplication} isApplied={isApplied}>
              {isApplied ? '취소하기' : '신청하기'}
            </StApplicationButton>
            
            <Modal isOpen={modalOpen}>
            {isApplied && modalType === 'apply' ? (
              <>
                <St.MainContents> 수업이 신청되었습니다!</St.MainContents>
                <St.SubContents>{nickname} 선생님 수업 신청 완료</St.SubContents>
                <StConfirmButton onClick={handleCloseModal}>확인</StConfirmButton>
              </>
            ) : (
              <>
                <St.MainContents>수업을 취소하시겠습니까?!</St.MainContents>
                <St.SubContents>선착순으로 조기마감 될 수 있어요.</St.SubContents>
                <St.ButtonContainer>
                  <StCancelButton onClick={handleCloseModal}>아니요</StCancelButton>
                  <StConfirmButton onClick={handleCancelApplication}>예</StConfirmButton>
                </St.ButtonContainer>
                
              </>
            )}
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

const ParticipationInfoWrapper = styled.div<{ justifycontentstyle: string }>`
  height: 8rem;

  display: flex;
  justify-content: ${(props) => props.justifycontentstyle};
  align-items: center;
  flex-shrink: 0;

  padding: 1rem 0;

  border-top: 0.1rem solid #E6E6E6;
`;

const St = {
  ParticipationInfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    
    padding: 1rem;
  `,
  ParticipationInfoText: styled.div`
    margin-bottom: 0.5rem;
    ${({ theme }) => theme.fonts.body07};
  `,
  ParticipationInfoPrice: styled.div`
    ${({ theme }) => theme.fonts.body01};
  `,
  ParticipationButtonContainer: styled.div`
    display: flex;
  `,
  CommonButton: styled.button`
    margin: 0 0.2rem;
    padding: 1.3rem 1.5rem;

    border: none;
    border-radius: 1rem;

    ${({ theme }) => theme.fonts.body06};

    cursor: pointer;
  `,
  MainContents: styled.div`
    margin: 0 3rem;
    margin-top: 1.5rem;

    ${({ theme }) => theme.fonts.body03};
  `,
  SubContents: styled.div`
    margin: 1.5rem 3rem;
    
    ${({ theme }) => theme.fonts.body08};
  `,
  ButtonContainer: styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`
}

const StChatButton = styled(St.CommonButton)`
  background-color: #E6E6E6;
`

const StApplicationButton = styled(St.CommonButton)<{ isApplied: boolean }>`
  background-color: ${({ theme, isApplied }) => 
    (isApplied ? theme.colors.SUB_1 : theme.colors.SUB_2)};
  color: ${({ theme, isApplied }) => (isApplied ? "white" : "black")};
`
const StConfirmButton = styled(St.CommonButton)`
  width: 100%;

  background-color: #FBD262;
`

const StCancelButton = styled(St.CommonButton)`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.Gray};

  &:active {
    background-color: ${({ theme }) => theme.colors.SUB_1};
  }
`;