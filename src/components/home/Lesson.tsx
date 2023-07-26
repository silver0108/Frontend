import { StarIcon } from '../../assets';
import { styled } from 'styled-components';
import { CategoryArtIcon, CategoryEtcIcon, CategoryExerciseIcon, CategoryLanguageIcon, CategoryMusicIcon } from "../../assets";

interface LessonProps {
    key: number;
    lessonImg : JSX.Element;
    lessonComment : string;
    lessonExplain : string;
    lessonTeacher : string;
    lessonScore : string;
    lessonDistance : string;
}
export default function Lesson(props: LessonProps) {

    const { lessonImg, lessonComment, lessonExplain, lessonTeacher, lessonScore, lessonDistance } = props;

    return (
        <St.LessonWrapper>
            <St.LessonImg> {lessonImg} </St.LessonImg>
            <St.LessonExplanation> 
                <St.Header> 모아모아 </St.Header>
                <St.Teacher> {lessonTeacher} {lessonScore} </St.Teacher> 
                <St.Distance> {lessonDistance} </St.Distance> 
            </St.LessonExplanation>
        </St.LessonWrapper>
  );
}

const St = {
    LessonWrapper: styled.section`
      display: flex;
      width: 37.5rem;
      height: 6.4rem;
      padding: 1.5rem;
    `,

    LessonImg : styled.article`
    width: 8rem;
    height: 8rem;
    `,

    LessonExplanation: styled.div`
    
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
