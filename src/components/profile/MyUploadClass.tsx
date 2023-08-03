import { styled } from 'styled-components';
import { UploadClassProps, WritingInfoProps } from '../../types/WritingData';
import NoContents from './NoContents';

export default function MyUploadClass(props:UploadClassProps) {

  const list = props.list;
  const num = 2;

  const handleStartLecture = () => {
    alert("시작")
  }

  const handleDeleteLecture = () => {
    alert("삭제")
  }

  return (
    <St.MyUploadClassWraper>
      {list.length === 0 ? (
        <NoContents type={0}/>
      ) : (
        <St.ScrollableContainer>
        {list.map((lecture, index) => (
          <St.MyUploadClassContainer key={index}>
            <St.ContentsContainer>
              <St.Title>{lecture.title}</St.Title>
              <St.PersonnelContainer>
                {num === lecture.personnel ? (
                  <St.Personnel>신청 마감</St.Personnel>
                ):(
                  <>
                    <St.Personnel>{num}/{lecture.personnel}명</St.Personnel>
                    <St.Status>신청 중</St.Status>
                  </>
                )}
                
              </St.PersonnelContainer>
              
            </St.ContentsContainer>
            {num === lecture.personnel ? (
              <StartButton onClick={handleStartLecture}>
              수업 시작
              </StartButton>
            ):(
              <DeleteButton onClick={handleDeleteLecture}>
              수업 삭제
              </DeleteButton>
            )}
            
          </St.MyUploadClassContainer>
        ))}
      </St.ScrollableContainer>
      )}
      
    </St.MyUploadClassWraper>
  );
}

const St = {
  MyUploadClassWraper: styled.div`
    margin: 0 1rem;
  `,
  ScrollableContainer: styled.div`
    height: 25rem;
    margin-bottom: 5rem;
    
    overflow-y: auto;
  `,
  MyUploadClassContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 0.15rem solid;
    border-color: ${({ theme }) => theme.colors.Gray};
  `,
  ContentsContainer: styled.div`
    display: flex;
    flex-direction: column;

    margin: 2.2rem 0;
  `,
  ButtonContainer: styled.button`
    width: 6.5rem;
    height: 3.2rem;

    ${({ theme }) => theme.fonts.body06};

    border-radius: 1.2rem;

    cursor: pointer;
  `,
  Title: styled.div`
    margin: 0.3rem 0;
    ${({ theme }) => theme.fonts.body06};

    white-space: pre-line;
  `,
  PersonnelContainer: styled.div`
    display: flex;
    align-items: center;

    margin: 0.3rem 0;
  `,
  Personnel: styled.div`
    margin-right: 0.5rem;

    ${({ theme }) => theme.fonts.body06};
    color: ${({ theme }) => theme.colors.Red};
  `,
  Status: styled.div`
    
    ${({ theme }) => theme.fonts.body07};
  `
};

const StartButton = styled(St.ButtonContainer)`
  background-color: ${({ theme }) => theme.colors.SUB_2};

  &:active {
    background-color: ${({ theme }) => theme.colors.Yellow_3};
  }
  
`

const DeleteButton = styled(St.ButtonContainer)`
  background-color: ${({ theme }) => theme.colors.Red};
  color: white;

  &:active {
    background-color: ${({ theme }) => theme.colors.SUB_1};
  }
`
