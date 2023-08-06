import {ChattingNotActiveIcon, HomeActiveIcon, ProfileNotActiveIcon, ChattingActiveIcon, HomeNotActiveIcon, ProfileActiveIcon} from '../../assets';
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

interface BottomBarProps {
  isWhere: string;
}

export default function BottomBar(props: BottomBarProps) {

  const navigate = useNavigate();

  function handleMoveToHome() {
    navigate('/home');
  }
  function handleMoveToChatting() {
    navigate('/chatting');
  }
  function handleMoveToProfile() {
    navigate('/profile');
  }
  return (
    <St.BottomBarWrapper>
        
      {props.isWhere === "홈" ? <St.HomeActiveIc onClick={handleMoveToHome} /> : <St.HomeNotActiveIc onClick={handleMoveToHome} />}
      {props.isWhere === "채팅" ? <St.ChattingActiveIc onClick={handleMoveToChatting} /> : <St.ChattingNotActiveIc onClick={handleMoveToChatting} />}
      {props.isWhere === "프로필" ? <St.ProfileActiveIc onClick={handleMoveToProfile} /> : <St.ProfileNotActiveIc onClick={handleMoveToProfile} />}

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
    height: 7rem;
    
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