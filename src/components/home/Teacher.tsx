import { CategoryArtIcon, CategoryEtcIcon, CategoryExerciseIcon, CategoryLanguageIcon, CategoryMusicIcon, DistanceIcon } from "../../assets";

import { StarIcon } from '../../assets';
import { styled } from 'styled-components';

interface TeacherProps {
    key: number;
    teacherImg : JSX.Element;
    teacherName : string;
    teacherCategory : string;
    teacherDistance : string;
    teacherScore : string;
    reviewNumber : string;
}
export default function Teacher(props: TeacherProps) {

    const { teacherImg, teacherName, teacherCategory, teacherDistance, teacherScore, reviewNumber } = props;

    return (
        <St.TeacherWrapper>
            <St.TeacherImg> {teacherImg} </St.TeacherImg>
            <St.TeacherExplanation> 
                <St.Name> {teacherName} </St.Name>
                <St.Category> {teacherCategory} </St.Category>
                <St.Info> 
                    <St.DistanceIc/> 
                    <St.DistanceNum> {teacherDistance} </St.DistanceNum> 
                    <St.Score> ⭐ {teacherScore} ({reviewNumber}) </St.Score> 
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

    TeacherImg : styled.article`
        display: flex;
        width: 7.3rem;
        height: 7.3rem;
        margin-right: 0.8rem;
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
