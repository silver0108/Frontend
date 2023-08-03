import Lesson from './Lesson';
import { LessonImg } from "../../assets";
import RoundButton from '../common/RoundButton';
import { StarIcon } from '../../assets';
import { styled } from 'styled-components';
import { useNavigate } from "react-router-dom";

// dummy data interface
interface LessonData {
    lessonImg: JSX.Element;
    lessonComment: string;
    lessonExplain: string;
    lessonTeacher: string;
    lessonScore: string;
    lessonDistance: string;
}

// 실제 객체 interface
interface LessonInfo {
    id: number;
    userId: number;
    categoryId: number;
    title: string;
    description: string;
    distance: number;
    participants: number;
    maxParticipants: number;
    talent: string;
    hashtags: string;
    price: number;
    imageUrl: null;
    createdAt: string;
}

export default function PopularLessonList({ props }: { props: LessonInfo[] }) {

    const navigate = useNavigate();
  
    function MoveToCategory() {
        navigate("/popular-teacher");
    }

    // data 받아오기
    console.log('props', props);

    // dummy list
    const popularList: LessonData[] = [
        {
            lessonImg: <LessonImg/>,
            lessonComment: "솜사탕 같이 만들어볼까요?",
            lessonExplain: "아이들에게 꿈같은 시간을 선물합니다.",
            lessonTeacher: "살구 선생님", 
            lessonScore: "4.2",
            lessonDistance: "~234m",
        },
        {
            lessonImg: <LessonImg/>,
            lessonComment: "솜사탕 같이 만들어볼까요?",
            lessonExplain: "아이들에게 꿈같은 시간을 선물합니다.",
            lessonTeacher: "살구 선생님", 
            lessonScore: "4.2",
            lessonDistance: "~234m",
        },
        {
            lessonImg: <LessonImg/>,
            lessonComment: "솜사탕 같이 만들어볼까요?",
            lessonExplain: "아이들에게 꿈같은 시간을 선물합니다.",
            lessonTeacher: "살구 선생님", 
            lessonScore: "4.2",
            lessonDistance: "~234m",
        }
    ]
    
    
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
