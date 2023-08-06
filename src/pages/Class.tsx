import { useState, useEffect } from 'react';
import styled from "styled-components";
import ProfileInfo from "../components/class/ProfileInfo";
import ClassAppeal from "../components/class/ClassAppeal";
import Review from "../components/class/Review";
import ParticipationInfo from "../components/class/ParticipationInfo";
import TopBar from '../components/common/TopBar';
import { ReviewInfo } from '../types/ReviewInfo';

const Profile = () => {
  const [activeButton, setActiveButton] = useState<number>(0);

  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
  }
  const [reviewList, setReviewList] = useState<ReviewInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/reviews`);
        const responseData = await response.json();

        setReviewList(responseData);
        
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <St.ProfileWrapper>
      <TopBar message = {"선생님 프로필"}/>
      <St.ProfileContainer>
        <ProfileInfo></ProfileInfo>
        <St.ProfileContentsButtonContainer>
          <St.ProfileContentsButton 
            active={(activeButton === 0).toString()}
            onClick={() => handleButtonClick(0)}>
            수업어필
          </St.ProfileContentsButton>
          <St.ProfileContentsButton 
            active={(activeButton === 1).toString()}
            onClick={() => handleButtonClick(1)}>
            후기 ( {reviewList.length} )
            </St.ProfileContentsButton>
        </St.ProfileContentsButtonContainer>
        {activeButton === 0 && (
          <ClassAppeal></ClassAppeal>
        )}
        {activeButton === 1 && (
          <Review reviewlist={reviewList}></Review>
        )}
      </St.ProfileContainer>
      <ParticipationInfo></ParticipationInfo>

    </St.ProfileWrapper>

  );
};

export default Profile;

const St = {
  ProfileWrapper: styled.div`
    width: 100%;
    // height: 100vh;

    display: flex;
    justify-content: center;
    flex-direction: column; 

    margin: 0 1rem;
  `,
  ProfileContainer: styled.div`
    flex: 1;
    overflow-y: auto;
  `,
  ProfileContentsButtonContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  ProfileContentsButton: styled.button<{active: string}>`
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