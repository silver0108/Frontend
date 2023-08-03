import { CategoryArtIcon, CategoryEtcIcon, CategoryExerciseIcon, CategoryLanguageIcon, CategoryMusicIcon } from "../../assets";

import { StarIcon } from '../../assets';
import { styled } from 'styled-components';

interface TeacherInfo {
    id: number;
    name: string;
    rating: number;
    imageUrl: string;
    gender: string;
  
}

export default function TeacherProfile(props: TeacherInfo) {

    const {id, name, rating, imageUrl, gender} = props;

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
    width: 5rem;
    height: 5.3rem;
    border-radius: 50px;
    `,

    TeacherName: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.4rem;
    margin-left: 0.5rem;
    ${({ theme }) => theme.fonts.body06};
    `,

    TeacherScore: styled.div`
    display: flex;
    justify-content: center;
    margin-left: 0.1rem;
    margin-top: 0.5rem;
    ${({ theme }) => theme.fonts.body08};
    `,

}
