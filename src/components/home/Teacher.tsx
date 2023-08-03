import { CategoryArtIcon, CategoryEtcIcon, CategoryExerciseIcon, CategoryLanguageIcon, CategoryMusicIcon, DistanceIcon } from "../../assets";
import {LessonInfo} from '../../types/LessonInfo';
import { StarIcon } from '../../assets';
import { styled } from 'styled-components';

export default function Teacher(props: LessonInfo) {

    let gender;

    if (props?.user?.gender === "woman") {
        gender = '엄마';
    } else {
        gender = '아빠';
    }

    return (
        <St.TeacherWrapper>
            <St.TeacherImg  src = {props?.user?.imageUrl} />
            <St.TeacherExplanation> 
                <St.Name> {props?.user?.username} {gender} </St.Name>
                <St.Category> {props?.category?.title} </St.Category>
                <St.Info> 
                    <St.DistanceIc/> 
                    <St.DistanceNum>  ~{props?.distance}m </St.DistanceNum> 
                    <St.Score> ⭐ {props?.user?.rating} </St.Score> 
                </St.Info> 
            </St.TeacherExplanation>
        </St.TeacherWrapper>
  );
}

const St = {
    TeacherWrapper: styled.section`
        display: flex;
        width: 32.5rem;
        height: 6rem;
        padding: 0.9rem 0rem 0.9rem 0rem;
        margin-left: 2.5rem;
        margin-bottom: 3rem;
    `,

    TeacherImg : styled.img`
        display: flex;
        width: 7.3rem;
        height: 7.3rem;
        margin-right: 0.8rem;

        border-radius: 50px;
    `,

    TeacherExplanation: styled.div`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        ${({ theme }) => theme.fonts.body05};
        color: ${({ theme }) => theme.colors.Black}; 
    `,
    
    Name: styled.header`
        margin-top: 0.5rem;
        ${({ theme }) => theme.fonts.body06};
        color: ${({ theme }) => theme.colors.Black}; 
    `,

    Category: styled.div`
        ${({ theme }) => theme.fonts.body05};
        color: ${({ theme }) => theme.colors.Black}; 
    `,
    
    Score: styled.div`
        margin-left: 1rem;
        ${({ theme }) => theme.fonts.body08};
        color: ${({ theme }) => theme.colors.Black}; 
    `,

    Info: styled.div`
        display: flex;
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
