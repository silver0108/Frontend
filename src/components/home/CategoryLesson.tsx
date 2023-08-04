import { CategoryArtIcon, CategoryEtcIcon, CategoryExerciseIcon, CategoryLanguageIcon, CategoryMusicIcon, DistanceIcon } from "../../assets";
import {LessonInfo} from '../../types/LessonInfo';
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



export default function CategoryLesson(props: LessonInfo) {

    let gender;

    if (props?.user?.gender === "woman") {
        gender = '엄마';
    } else {
        gender = '아빠';
    }

    return (
        <St.LessonWrapper>
            <St.LessonImg src = {props?.user?.imageUrl}/>
            <St.LessonExplanation> 
                <St.Header> {props?.title} </St.Header>
                <St.HashTags> {props?.hashtags} </St.HashTags>
                <St.Teacher> {props?.user?.username} {gender} ⭐{props?.user?.rating} </St.Teacher> 
                <St.Distance> 
                    <St.DistanceIc/> 
                    <St.DistanceNum> ~{props?.distance}m </St.DistanceNum> 
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
        margin-left: 1.8rem;
        margin-bottom: 3rem;
    `,

    LessonImg : styled.img`
        display: flex;
        width: 6rem;
        height: 6rem;
        margin-right: 0.8rem;

        border-radius: 50px;
    `,

    LessonExplanation: styled.div`
        display: flex;
        flex-direction: column;

        ${({ theme }) => theme.fonts.body08};
        color: ${({ theme }) => theme.colors.Black}; 
    `,
    
    Header: styled.header`
        ${({ theme }) => theme.fonts.body07};
        color: ${({ theme }) => theme.colors.Black}; 
    `,

    HashTags: styled.div`
    margin-top: 0.3rem;
    ${({ theme }) => theme.fonts.body07};
    color: ${({ theme }) => theme.colors.Black}; 
    `,
    
    Teacher: styled.div`
        margin-top: 0.4rem;
        ${({ theme }) => theme.fonts.body08};
        color: ${({ theme }) => theme.colors.Black}; 
    `,

    Distance: styled.div`
        display: flex;
        
        margin-top: 0.3rem;
    `,

    DistanceIc : styled(DistanceIcon)`
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.5rem;
        color: ${({ theme }) => theme.colors.Black}; 
    `,

    DistanceNum : styled.h3`
        ${({ theme }) => theme.fonts.body08};
        color: ${({ theme }) => theme.colors.Blue}; 
    `,
};
