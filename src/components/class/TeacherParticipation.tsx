import { useRecoilValue } from "recoil";
import { styled } from "styled-components"
import { ClassInfoState } from "../../atom/ClassInfo";
import { theme } from "../../style/theme";

export default function TeacherParticipation() {
  const data = useRecoilValue(ClassInfoState)
  const backgroundColor = (data.participants === data.maxParticipants) || (data.participants === 0)
   ? theme.colors.Gray : theme.colors.Main;
  
   return (
    <St.TeacherParticipationWrapper>
      {data.participants === data.maxParticipants ? (
        <>
          <StChatButton backgroundcolor={backgroundColor}>채팅하기</StChatButton>
          <StStartButton>
            수업 시작
          </StStartButton>
      </>
      ):(
        <StChatButton backgroundcolor={backgroundColor}>채팅하기</StChatButton>
      )}
      
      
    </St.TeacherParticipationWrapper>
  )
}

const St = {
  TeacherParticipationWrapper: styled.div`
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

const StChatButton = styled(St.CommonButton)<{backgroundcolor:string}>`
  background-color: ${(props) => props.backgroundcolor};
`

const StStartButton = styled(St.CommonButton)`
  background-color: ${({theme}) => theme.colors.Main}
`