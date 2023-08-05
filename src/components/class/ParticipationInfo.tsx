import { useState } from 'react';
import styled from "styled-components";
import Modal from '../common/Modal';
import { ProfileProps } from '../../types/ProfileData';
import { auth } from '../../firebase';
import { useRecoilValue } from 'recoil';
import { ClassInfoState } from '../../atom/ClassInfo';
import ParentParticipation from './ParentParticipation';
import TeacherParticipation from './TeacherParticipation';
import { UserInfoState } from '../../atom/UserInfo';

const ParticipationInfo = () => {
  const data = useRecoilValue(ClassInfoState);
  const userId = useRecoilValue(UserInfoState).id;
  console.log(userId)
  const justifyContentStyle = data.participants > data.maxParticipants ? "center" : "space-between";

  return (
    <St.ParticipationInfoWrapper justifycontentstyle={ justifyContentStyle } >
      {data.participants <= data.maxParticipants ? (
        <>
          <St.ParticipationInfoContainer>
            <St.ParticipationInfoText> 현재 참여현황 ({data.participants}/{data.maxParticipants})</St.ParticipationInfoText>
            <St.ParticipationInfoPrice>{data.price}원</St.ParticipationInfoPrice>
          </St.ParticipationInfoContainer>
          <St.ParticipationButtonContainer>
            {data.user.id !== userId ? 
              <ParentParticipation/>
            : 
              <TeacherParticipation/>
            }
          </St.ParticipationButtonContainer>
            </>
      ):(
        <h3>신청이 마감되었습니다.</h3>
      )}
    </St.ParticipationInfoWrapper>
  );
};

export default ParticipationInfo;

const St = {
  ParticipationInfoWrapper: styled.div<{ justifycontentstyle: string }>`
    height: 8rem;

    display: flex;
    justify-content: ${(props) => props.justifycontentstyle};
    align-items: center;
    flex-shrink: 0;

    padding: 1rem 0;

    border-top: 0.1rem solid #E6E6E6;
  `,
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

}