import Lesson from './Lesson';
import { LessonImg } from "../../assets";
import RoundButton from '../common/RoundButton';
import { StarIcon } from '../../assets';
import { styled } from 'styled-components';
import { useNavigate } from "react-router-dom";
import {FeaturedInfo} from '../../types/FeaturedInfo';


export default function CloseDistanceLessonList({ props }: { props: FeaturedInfo[] }) {
    const navigate = useNavigate();
  
    function MoveToCategory() {
      window.scrollTo(0, 0);
      navigate(`/close-distance`);
    }

    const distanceList = props;
    
    
    return (
        <St.PopularLessonListWrapper>
            <St.Header> 멀리 가실 필요 없어요!🙅 </St.Header>
            {distanceList.map((lesson, idx) => (
            <Lesson key={idx} {...lesson} />
            ))}
            
            <St.RoundButtonWrapper>
                <RoundButton buttonMessage = {"가까운 모아 더 보러가기"} onClick={()=>MoveToCategory()}/>
            </St.RoundButtonWrapper>
        </St.PopularLessonListWrapper>
    );
}

const St = {
    PopularLessonListWrapper: styled.section`
      display: flex;
      flex-direction: column;
      width: 37.5rem;
      margin-top: 4rem;
    `,
    
    Header: styled.header`
      ${({ theme }) => theme.fonts.body01};
      color: black;
      margin-left: 2.5rem;
      margin-bottom: 1.5rem;
    `,
    RoundButtonWrapper: styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 10rem;
    `
  };
