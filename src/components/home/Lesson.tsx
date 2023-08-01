import { CategoryArtIcon, CategoryEtcIcon, CategoryExerciseIcon, CategoryLanguageIcon, CategoryMusicIcon, DistanceIcon } from "../../assets";

import { StarIcon } from '../../assets';
import { styled } from 'styled-components';

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
                <St.Teacher> {lessonTeacher} ⭐{lessonScore} </St.Teacher> 
                <St.Distance> 
                    <St.DistanceIc/> 
                    <St.DistanceNum> {lessonDistance} </St.DistanceNum> 
                </St.Distance> 
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
    
        margin-top: 1rem;

        ${({ theme }) => theme.fonts.body05};
        color: black;
    `,
    
    Header: styled.header`
        ${({ theme }) => theme.fonts.body06};
        color: black;
    `,
    
    Teacher: styled.div`
        margin-top: 0.2rem;
        ${({ theme }) => theme.fonts.body05};
        color: black;
    `,

    Distance: styled.div`
        display: flex;
    
    `,

    DistanceIc : styled(DistanceIcon)`
        width: 1.5rem;
        height: 1.5rem;
        margin-top: 0.3rem;
        margin-right: 0.5rem;
    `,

    DistanceNum : styled.h3`
    ${({ theme }) => theme.fonts.body05};
    color: ${({ theme }) => theme.colors.Blue}; 

    margin-top: 0.2rem;
    `,
};
