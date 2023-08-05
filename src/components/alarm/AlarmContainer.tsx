import { StarIcon } from '../../assets';
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

export default function AlarmContainer() {
  

  return (
    <St.AlarmWrapper>
        
      <St.Header>
        <St.Explain>쉬운 수업 관리를 위해</St.Explain>
        <St.Explain>알람을 활성화해보세요!</St.Explain>
      </St.Header>

      <St.AppLogoContainer>
        <St.AppLogo/>
      </St.AppLogoContainer>
      
      <St.ButtonContainer>
        <St.AllowButton> 알림 허용하기 </St.AllowButton>
        <St.RefuseButton> 건너 뛰기 </St.RefuseButton>
      </St.ButtonContainer>
    </St.AlarmWrapper>
  );
}

const St = {
    
  AlarmWrapper : styled.div`
    display: flex;
    width: 32.5rem;
    flex-direction: column;
  `,
  
  Header: styled.div`
    display: flex;
    flex-direction: column;
    
    margin-top: 8rem;
    margin-left: 3rem;
  `,
  
  Explain: styled.div`
    ${({theme}) => theme.fonts.title02};
    margin-bottom: 2rem;
  `,
  
  AppLogoContainer: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 7rem;
  `,
  
  AppLogo: styled(StarIcon)`
    width: 8rem;
    height: 8rem;
  `,

  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  `,

  AllowButton: styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28rem;
  height: 5rem;
  margin-top: 1.5rem;

  background-color: ${({ theme }) => theme.colors.SUB_2};
  color: black;

  ${({ theme }) => theme.fonts.body03};

  border-radius: 15px;
`,
RefuseButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 28rem;
    height: 5rem;
    margin-top: 1.5rem;

    background-color: ${({ theme }) => theme.colors.Gray};
    color: black;

    ${({ theme }) => theme.fonts.body03};

    border-radius: 15px;
    `


}