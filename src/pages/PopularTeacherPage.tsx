import Lesson from '../components/home/Lesson';
import { LessonImg } from "../assets";
import TopBar from '../components/common/TopBar';
import {styled} from 'styled-components';
import useGetPopularTeacher from "../hooks/useGetPopularTeacher";

interface LessonData {
    lessonImg: JSX.Element;
    lessonComment: string;
    lessonExplain: string;
    lessonTeacher: string;
    lessonScore: string;
    lessonDistance: string;
}

export default function PopularTeacherPage() {
    // api get 해올 부분
    
    
  const { popularTeacherList } = useGetPopularTeacher();
    console.log(popularTeacherList);
    const teacerList: LessonData[] = [
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
      <St.PopularTeacherWrapper>
        
        <TopBar message = {"인기 급상승 수업들"} />
        {teacerList.map((lesson, idx) => (
            <Lesson key={idx} {...lesson} />
        ))}
      </St.PopularTeacherWrapper>
    );
}

const St = {
    PopularTeacherWrapper: styled.div`
    display: flex;
    flex-direction: column;
    `
}