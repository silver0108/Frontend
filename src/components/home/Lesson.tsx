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
                <St.Header> {lessonComment} <br/> {lessonExplain} </St.Header>
                <St.Teacher> {lessonTeacher} {lessonScore} </St.Teacher> 
                <St.Distance> {lessonDistance} </St.Distance> 
            </St.LessonExplanation>
        </St.LessonWrapper>
  );
}

const St = {
    LessonWrapper: styled.section`
      display: flex;
      width: 32.5rem;
      height: 6rem;
      padding: 0.9rem 0rem 0.9rem 0rem;
      margin-left: 2rem;
      margin-bottom: 2rem;
    `,

    LessonImg : styled.article`
        display: flex;
        width: 6rem;
        height: 6rem;
        margin-right: 0.8rem;
    `,

    LessonExplanation: styled.div`
        display: flex;
        flex-direction: column;
    
        margin-top: 0.4rem;

        ${({ theme }) => theme.fonts.body05};
        color: black;
    `,
    
    Header: styled.header`
        ${({ theme }) => theme.fonts.body06};
        color: black;
    `,
    
    Teacher: styled.div`
        margin-top: 0.2rem;
        ${({ theme }) => theme.fonts.body07};
        color: black;
    `,

    Distance: styled.h3`
        margin-top: 0.2rem;
        ${({ theme }) => theme.fonts.body07};
        color: ${({ theme }) => theme.colors.SUB_1}; 
    `
  };
