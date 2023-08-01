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
  justify-content: center;
  align-items: center;

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 6rem;
  background-color: ${({theme})=> theme.colors.White};
  `,

  ChattingNotActiveIc : styled(ChattingNotActiveIcon)`
  `,
  
  HomeActiveIc : styled(HomeActiveIcon)`

  `,
  
  ProfileNotActiveIc : styled(ProfileNotActiveIcon)`
  `,

  ChattingActiveIc : styled(ChattingActiveIcon)`
  `,
  
  HomeNotActiveIc : styled(HomeNotActiveIcon)`

  `,
  
  ProfileActiveIc : styled(ProfileActiveIcon)`
  `

  
}