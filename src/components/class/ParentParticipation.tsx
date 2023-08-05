import { useState } from "react";
import { styled } from "styled-components"
import Modal from "../common/Modal";
import { useRecoilState } from "recoil";
import { ClassInfoState } from "../../atom/ClassInfo";

export default function ParentParticipation() {
  const [data, setData] = useRecoilState(ClassInfoState)

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isApplied, setIsApplied] = useState<'true' | 'false'>('false');
  const [modalType, setModalType] = useState<'apply' | 'cancel' | ''>('');

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const handleApplication = () => {
    if(isApplied)
      setModalType('cancel');
    else{
      if (data.participants < 3) {
        setData((data) => ({
          ...data,
          participants: data.participants+1
        }))
        setIsApplied('true');
        setModalType('apply');
      }
    }
    setModalOpen(true); 
  };

  const handleCancelApplication = () => {
    setData((data) => ({
      ...data,
      participants: data.participants-1
    }))
    setIsApplied('false');
    setModalOpen(false);
  }

  return (
    <St.ParentParticipationWrapper>
      <StChatButton>채팅하기</StChatButton>
      <StApplicationButton onClick={handleApplication} isapplied={isApplied}>
        {isApplied ? '취소하기' : '신청하기'}
      </StApplicationButton>
      
      <Modal isOpen={modalOpen}>
      {isApplied && modalType === 'apply' ? (
        <>
          <St.MainContents> 수업이 신청되었습니다!</St.MainContents>
          <St.SubContents>ㅎㅎ 선생님 수업 신청 완료</St.SubContents>
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
    </St.ParentParticipationWrapper>
  )
}

const St = {
  ParentParticipationWrapper: styled.div`
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

const StApplicationButton = styled(St.CommonButton)<{ isapplied: string }>`
  background-color: ${({ theme, isapplied }) => 
    (isapplied === 'true' ? theme.colors.SUB_1 : theme.colors.SUB_2)};
  color: ${({ theme, isapplied }) => (isapplied === 'true'? "white" : "black")};
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