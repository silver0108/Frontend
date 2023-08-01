import {ChattingNotActiveIcon, HomeActiveIcon, ProfileNotActiveIcon, ChattingActiveIcon, HomeNotActiveIcon, ProfileActiveIcon} from '../../assets';
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";


export default function BottomBar() {
  const navigate = useNavigate();

  function handleMoveToHome() {
    navigate(-1);
  }
  function handleMoveToChatting() {
    navigate(-1);
  }
  function handleMoveToProfile() {
    navigate(-1);
  }
  return (
    <St.BottomBarWrapper>
        
      <St.HomeActiveIc onClick={handleMoveToHome} />
      <St.ChattingNotActiveIc onClick={handleMoveToChatting} />
      <St.ProfileNotActiveIc onClick={handleMoveToProfile} />

    </St.BottomBarWrapper>
  );
}

const St = {
  BottomBarWrapper : styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    position: fixed;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 6rem;
    
    background-color: ${({theme})=> theme.colors.White};
    border-top: 1.5px solid ${({theme})=> theme.colors.Gray};
  `,

  ChattingNotActiveIc : styled(ChattingNotActiveIcon)`
    width: 10rem;
    height: 6rem;
  `,
  
  HomeActiveIc : styled(HomeActiveIcon)`
    width: 10rem;
    height: 6rem;
  `,
  
  ProfileNotActiveIc : styled(ProfileNotActiveIcon)`
    width: 10rem;
    height: 6rem;
  `,

  ChattingActiveIc : styled(ChattingActiveIcon)`
    width: 10rem;
    height: 6rem;
  `,
  
  HomeNotActiveIc : styled(HomeNotActiveIcon)`
    width: 10rem;
    height: 6rem;
  `,
  
  ProfileActiveIc : styled(ProfileActiveIcon)`
    width: 10rem;
    height: 6rem;
  `

  
}