import { StarIcon } from '../../assets';
import { styled } from 'styled-components';
import { LessonImg } from "../../assets";
import Lesson from './Lesson';

interface LessonData {
    lessonImg: JSX.Element;
    lessonComment: string;
    lessonExplain: string;
    lessonTeacher: string;
    lessonScore: string;
    lessonDistance: string;
}

export default function PopularLessonList() {

    // data 받아오기
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
            <St.Header> 지금 인기가 많아지고 있어요! </St.Header>
            {popularList.map((lesson, idx) => (
            <Lesson key={idx} {...lesson} />
            ))}
        </St.PopularLessonListWrapper>
    );
}

const St = {
    PopularLessonListWrapper: styled.section`
      display: flex;
      width: 37.5rem;
    `,

    
    Header: styled.header`
      ${({ theme }) => theme.fonts.title02};
      color: black;
    `,
    
    Teacher: styled.div`
    
    `,

    Distance: styled.h3`
    `
  };
