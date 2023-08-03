import { CategoryArtIcon, CategoryEtcIcon, CategoryExerciseIcon, CategoryLanguageIcon, CategoryMusicIcon } from "../../assets";

import { StarIcon } from '../../assets';
import { styled } from 'styled-components';

interface TeacherProps {
    teacherImg: JSX.Element;
    teacherName: string;
    teacherScore: number;
}

interface TeacherInfo {
    id: number;
    name: string;
    rating: number;
    imageUrl: string;
    gender: string;
  
}

export default function TeacherProfile(props: TeacherInfo) {

    const {id, name, rating, imageUrl, gender} = props;
    // const { teacherImg, teacherName, teacherScore } = props;

    return (
        <St.TeacherWrapper>
            <St.TeacherImg src = {imageUrl} /> 
            <St.TeacherName> {name} </St.TeacherName> 
            <St.TeacherScore> ⭐ {rating} </St.TeacherScore> 
        </St.TeacherWrapper>
  );
}

const St = {

    TeacherWrapper: styled.article`
    display: flex;
    flex-direction: column;
    `,

    TeacherImg: styled.img`
    width: 4.3rem;
    height: 4.3rem;
    `,

    TeacherName: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-left: 1rem;
    ${({ theme }) => theme.fonts.body06};
    `,

    TeacherScore: styled.div`
    display: flex;
    justify-content: center;
    margin-left: 1rem;
    margin-top: 0.5rem;
    ${({ theme }) => theme.fonts.body08};
    `,

}
