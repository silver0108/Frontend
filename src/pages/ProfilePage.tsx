import { ApplyClassInfoProps, UploadClassProps, WritingInfoProps } from "../types/WritingData";

import BottomBar from "../components/common/BottomBar";
import MyApplyClass from "../components/profile/MyApplyClass";
import MyUploadClass from "../components/profile/MyUploadClass";
import Profile from "../components/profile/Profile";
import TopBar from "../components/common/TopBar";
import { styled } from "styled-components";
import { useState } from "react";

let uploadClassData:WritingInfoProps[] = [
  {
    title: '솜사탕 같이 만들어볼까요?\n 아이들에게 꿈같은 시간을 선물합니다.',
    personnel: 3,
    category: '기타',
    tag: ['솜사탕'],
    appeal: '- 쉬워요!',
    price: 15000
  },
  {
    title: '배드민턴 쉽게 가르쳐드려요!',
    personnel: 2,
    category: '운동',
    tag: ['배드민턴', '8~12세', '정원 4명'],
    appeal: '- 10분 기본 체조\n\
            - 엄격 X',
    price: 20000
  },
  {
    title: '같이 빵 만들어볼까요?\n아이들에게 꿈같은 시간을 선물합니다.',
    personnel: 4,
    category: '기타',
    tag: ['제빵', '나이제한 없음'],
    appeal: '- 맛있게 만들어봐요!\n\
            - 만들어서 집에 가져갈 수 있어요!',
    price: 25000
  },
  {
    title: '영어 배우러 오세요~',
    personnel: 6,
    category: '언어',
    tag: ['영어', '원어민'],
    appeal: '- 영어 어렵지 않아요.\n\
            - 재밌게 배워봐요',
    price: 15000
  }
]

let applyClassData:ApplyClassInfoProps[] = [
  {
    avatar: "img/profile_default.png",
    nickname: "살구 아빠",
    rating: 4.5,
    title: "축구도 하고, 친구도 사귀는 일석이조 수업입니다!",
    distance: 232
  }, 
  {
    avatar: "img/profile1.png",
    nickname: "혜인 엄마",
    rating: 4.2,
    title: "애니메이션을 자막 없이 볼수 있게!\n 생생한 일본어 교실",
    distance: 330
  },
  {
    avatar: "img/profile_default.png",
    nickname: "민지 아빠",
    rating: 4.0,
    title: "솜사탕 같이 만들어볼까요?\n 아이들에게 꿈같은 시간을 선물합니다.",
    distance: 232
  }, 
  {
    avatar: "img/profile2.png",
    nickname: "주희 엄마",
    rating: 3.9,
    title: "중국 현지에 있는 것처럼 현실감있는 중국어 교실",
    distance: 458
  }];

export default function ProfilePage() {

  const [activeButton, setActiveButton] = useState<number>(0);

  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
  }

  return(
    <St.ProfilePageWrapper>
      <TopBar message="프로필"/>
      <St.ProfilePageContainer>
        <Profile/>
        <St.BarContainer></St.BarContainer>
        <St.MyClassContainer>
          <St.CommonTwoButton
            active={(activeButton === 0).toString()}
            onClick={() => handleButtonClick(0)}>
            내가 올린 모아
          </St.CommonTwoButton>
          <St.CommonTwoButton
            active={(activeButton === 1).toString()}
            onClick={() => handleButtonClick(1)}>
            내가 신청한 모아
          </St.CommonTwoButton>
        </St.MyClassContainer>
        {activeButton === 0 && (
          <MyUploadClass list={uploadClassData}/>
        )}
        {activeButton === 1 && (
          <MyApplyClass list={applyClassData}/>
        )}
      </St.ProfilePageContainer>
      <BottomBar/>
    </St.ProfilePageWrapper>
  );
}

const St = {
  ProfilePageWrapper: styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column; 

    width: 100%;
  `,
  ProfilePageContainer: styled.div`
    flex: 1;
    overflow-y: auto;
  `,
  BarContainer: styled.div`
    border: 0.5rem solid #F5F5F5;
  `,
  MyClassContainer: styled.div`
    display: flex;
    justify-content: space-between;

    margin: 0 1rem;
  `,
  CommonTwoButton: styled.button<{active: string}>`
    flex: 1;

    padding: 2rem;

    border: none;
    border-bottom: 0.3rem solid ${(props) => ((props.active === "true") ? 'black' : '#ccc')};
    
    background-color: white;
    color: ${(props) => ((props.active === "true") ? 'black' : '#ccc')};
    

    ${({ theme }) => theme.fonts.body06};

    cursor: pointer;
  `

}