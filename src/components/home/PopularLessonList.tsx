import Lesson from './Lesson';
import { LessonImg } from "../../assets";
import RoundButton from '../common/RoundButton';
import { StarIcon } from '../../assets';
import { styled } from 'styled-components';
import { useNavigate } from "react-router-dom";
import {FeaturedInfo} from '../../types/FeaturedInfo';

export default function PopularLessonList({ props }: { props: FeaturedInfo[] }) {

    const navigate = useNavigate();
  
    function MoveToCategory() {
        window.scrollTo(0, 0);
        navigate("/popular-teacher");
    }

    const popularList = props;
    
    
    return (
        <St.PopularLessonListWrapper>
            <St.Header> 지금 인기가 많아지고 있어요! 🚀 </St.Header>
            {popularList.map((lesson, idx) => (
            <Lesson key={idx} {...lesson} />
            ))}
            <St.RoundButtonWrapper>
                <RoundButton buttonMessage = {"급 인기 상승중인 모아 더 보러가기"}  onClick={()=>MoveToCategory()}/>
            </St.RoundButtonWrapper>
        </St.PopularLessonListWrapper>
    );
}

const St = {
    PopularLessonListWrapper: styled.section`
        display: flex;
        flex-direction: column;
        width: 37.5rem;
        margin-top: 3rem;
    `,
    
    Header: styled.header`
      
        ${({ theme }) => theme.fonts.body01};
        color: black;
        margin-left: 2.5rem;
        margin-bottom: 2rem;
    `,

    RoundButtonWrapper: styled.div`
        display: flex;
        justify-content: center;
    `
  };
