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
        margin-left: 2.5rem;
        margin-bottom: 3rem;
    `,

    LessonImg : styled.article`
        display: flex;
        width: 7.3rem;
        height: 7.3rem;
        margin-right: 0.8rem;
    `,

    LessonExplanation: styled.div`
        display: flex;
        flex-direction: column;

        ${({ theme }) => theme.fonts.body05};
        color: ${({ theme }) => theme.colors.Black}; 
    `,
    
    Header: styled.header`
        ${({ theme }) => theme.fonts.body03};
        color: ${({ theme }) => theme.colors.Black}; 
    `,
    
    Teacher: styled.div`
        margin-top: 0.4rem;
        ${({ theme }) => theme.fonts.body05};
        color: ${({ theme }) => theme.colors.Black}; 
    `,

    Distance: styled.div`
        display: flex;
        
        margin-top: 0.4rem;
    `,

    DistanceIc : styled(DistanceIcon)`
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.5rem;
        color: ${({ theme }) => theme.colors.Black}; 
    `,

    DistanceNum : styled.h3`
        ${({ theme }) => theme.fonts.body05};
        color: ${({ theme }) => theme.colors.Blue}; 
    `,
};
