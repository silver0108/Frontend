import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

export default function AlarmContainer() {
  
  return (
    <St.AlarmWrapper>
        <St.AlarmHeader>
            쉬운 관리를 위해 <br/> <br/> 알림을 활성화해보세요!
        </St.AlarmHeader>
    </St.AlarmWrapper>
  );
}

const St = {
    AlarmWrapper : styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

  `,
    AlarmHeader: styled.div`
        display: flex;
        gap: 3rem;
        margin-top : 10rem;
        margin-left: 3rem;
        ${({ theme }) => theme.fonts.body03};
    
  `

}