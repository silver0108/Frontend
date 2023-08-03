import { styled } from 'styled-components';
import NoContents from './NoContents';
import { ReviewProps } from '../../types/ReviewData';
import { ApplyClassProps } from '../../types/WritingData';
import { DistanceIcon, StarIcon_1, TeacherImg } from '../../assets';
import { useNavigate } from 'react-router';
export default function MyApplyClass(props:ApplyClassProps) {
  const list = props.list;

  const navigate = useNavigate();
  return (
    <St.MyApplyClassWrapper>
      {list.length === 0 ? (
        <NoContents type={0}/>
      ) : (
        <St.ScrollableContainer>
        {list.map((lecture, index) => (
          <St.MyApplyClassContainer key={index} onClick={() => navigate('/class')}>
            <TeacherImg/>
            <St.ContentsContainer>
              <St.Title>{lecture.title}</St.Title>
              <St.InfoContainer>
                <St.Nickname>{lecture.nickname}</St.Nickname>
                <St.RatingContainer>
                  <StarIcon_1/>
                  <St.Rating>{lecture.rating} / 5</St.Rating>
                </St.RatingContainer>
              </St.InfoContainer>
              <St.DistanceContainer>
                <DistanceIcon/>
                <St.Distance>~{lecture.distance}m</St.Distance>
              </St.DistanceContainer>
            </St.ContentsContainer>
            
          </St.MyApplyClassContainer>
        ))}
      </St.ScrollableContainer>
      )}
    </St.MyApplyClassWrapper>
  );
}

const St = {
  MyApplyClassWrapper: styled.div`
    margin: 0 1rem;
  `,
  ScrollableContainer: styled.div`
    height: 25rem;
    margin-bottom: 7rem;
    
    overflow-y: auto;
  `,
  MyApplyClassContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  ContentsContainer: styled.div`
    display: flex;
    flex-direction: column;

    padding: 0 1.5rem;
    padding-top: 2rem;
  `,
  ImageContainer: styled.image`
  
  `,
  Title: styled.div`
    margin: 0.5rem 0;
    ${({ theme }) => theme.fonts.body06};

    white-space: pre-line;

  `,
  InfoContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  Nickname: styled.div`
    ${({ theme }) => theme.fonts.body08};
    color: ${({ theme }) => theme.colors.Black};
  `,
  RatingContainer: styled.div`
    display: flex;
    align-items: center;

    margin: 0 2rem;
  `,
  Rating: styled.div`
    ${({ theme }) => theme.fonts.body08};
  `,
  DistanceContainer: styled.div`
    display: flex;

    margin: 0.5rem 0;    
  `,
  Distance: styled.div`
    color: ${({ theme }) => theme.colors.Blue};
    ${({ theme }) => theme.fonts.body08};
  `

};

