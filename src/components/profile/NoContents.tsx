import { styled } from 'styled-components';
import { UploadClassProps, WritingInfoProps } from '../../types/WritingData';
import { StatusBarImg } from '../../assets';
import RoundButton from '../common/RoundButton';
import { useNavigate } from 'react-router-dom';

interface NoContentsProps {
  type: number;
}

export default function NoContents(props: NoContentsProps) {
  const { type } = props;
  const navigate = useNavigate();

  const moveToWriting = () => {
    window.scrollTo(0, 0);
    navigate("/writing");
  }

  return (
    <St.NoContentsWrapper>
      {type === 0 ? (
        <>
          <St.NoContentsContainer>
            <StatusBarImg/>
            <St.Contents>등록된 글이 없습니다.</St.Contents>
          </St.NoContentsContainer>
          <St.ButtonContainer onClick={()=> navigate('/writing')}>
            재능 공유 글쓰기
          </St.ButtonContainer>
        </>
      ):(
        <>
          <St.NoContentsContainer>
            <StatusBarImg/>
            <St.Contents>신청한 글이 없습니다.</St.Contents>
          </St.NoContentsContainer>
          <St.ButtonContainer onClick={()=> navigate('/')}>
            수업 찾아보기
          </St.ButtonContainer>
        </>
      )}
    </St.NoContentsWrapper>
  );
}

const St = {
  NoContentsWrapper: styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 7rem;
    
    overflow-y: auto;
  `,
  NoContentsContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 6rem 0;
  `,
  Contents: styled.div`
    margin-top: 2rem;
    ${({ theme }) => theme.fonts.body06};
  `,
  ButtonContainer: styled.button`
    height: 3.5rem;
    margin: 0 1rem;

    background-color: ${({ theme }) => theme.colors.Main};

    ${({ theme }) => theme.fonts.body06};

    border-radius: 1rem;

    cursor: pointer;
  `

};