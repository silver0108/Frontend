import { useState } from 'react';
import styled from "styled-components";

import ProfileInfo from "../components/ProfileInfo";
import ClassAppeal from "../components/ClassAppeal";
import Review from "../components/Review";
import ParticipationInfo from "../components/ParticipationInfo";
import { ProfileInfoProps } from "../types/ProfileData";
import { WritingInfoProps } from "../types/WritingData";
import { ReviewInfoProps } from '../types/ReviewData';

let profileData:ProfileInfoProps = {
  nickname: '상훈',
  phonenumber: '01012345678',
  place: '서울 스페이스 살림 다목적홀',
  gender: '남성',
  age: 30,
}

let writingData:WritingInfoProps = {
  title: '배드민턴 쉽게 가르쳐드려요!',
  personnel: 3,
  category: '운동',
  tag: ['배드민턴', '8~12세', '정원 4명'],
  appeal: '- 육상 운동 선수 출신\n\
          - 10분 기본 체조\n\
          - 엄격 X',
  price: 15000
}

let reviewData:ReviewInfoProps[] = [
  {
    avatar: "img/profile_default.png",
    nickname: "실버",
    rating: 4.5,
    contents: "정말 멋진 선생님입니다.\n 수업목적에 맞추어 ~",
  }, 
  {
    avatar: "img/profile_default.png",
    nickname: "골드",
    rating: 1.7,
    contents: "싫어요",
  },
  {
    avatar: "img/profile_default.png",
    nickname: "실버",
    rating: 4.5,
    contents: "좋아요",
  }, 
  {
    avatar: "img/profile_default.png",
    nickname: "골드",
    rating: 1.7,
    contents: "별로에요... 다신 안들어요.",
  }];

const Profile = () => {
  const [activeButton, setActiveButton] = useState<number>(0);

  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
  }

  return (
    <ProfileWrapper>
      <h3 style={{textAlign:"center"}}>
        선생님 프로필
      </h3>

      <St.ProfileContainer>
        <ProfileInfo profile={profileData} writing={writingData}></ProfileInfo>
        {/* <ProfileInfo {...profileData} {...writingData}></ProfileInfo> */}
        <St.ProfileContentsButtonContainer>
          <St.ProfileContentsButton 
            active={activeButton === 0}
            onClick={() => handleButtonClick(0)}>
            수업어필
          </St.ProfileContentsButton>
          <St.ProfileContentsButton 
            active={activeButton === 1}
            onClick={() => handleButtonClick(1)}>
            후기 ({reviewData.length})
            </St.ProfileContentsButton>
        </St.ProfileContentsButtonContainer>
        {activeButton === 0 && (
          <ClassAppeal contents={writingData}></ClassAppeal>
        )}
        {activeButton === 1 && (
          <Review list={reviewData}></Review>
        )}
      </St.ProfileContainer>
      <ParticipationInfo profile={profileData} writing={writingData}></ParticipationInfo>

    </ProfileWrapper>

  );
};

export default Profile;

const ProfileWrapper = styled.div`
  width: 100%;
  // height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: column; 

  margin: 0 1rem;

`;

const St = {
  ProfileContainer: styled.div`
    flex: 1;
    overflow-y: auto;
  `,
  ProfileContentsButtonContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  ProfileContentsButton: styled.button<{active: boolean}>`
    flex: 1;

    padding: 1rem;

    border: none;
    border-bottom: 0.2rem solid ${(props) => (props.active ? 'black' : '#ccc')};
    
    background-color: white;
    color: ${(props) => (props.active ? 'black' : '#ccc')};
    
    font-size: 1.1rem;
    font-weight: bold;

    cursor: pointer;
  `

}