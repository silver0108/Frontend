import { CategoryArtIcon, CategoryEtcIcon, CategoryExerciseIcon, CategoryLanguageIcon, CategoryMusicIcon } from "../../assets";

import { StarIcon } from '../../assets';
import { styled } from 'styled-components';

interface TeacherProps {
    teacherImg: JSX.Element;
    teacherName: string;
    teacherScore: number;
}

export default function TeacherProfile(props: TeacherProps) {

    const { teacherImg, teacherName, teacherScore } = props;

    return (
        <St.TeacherWrapper>
            <St.TeacherImg> {teacherImg} </St.TeacherImg>
            <St.TeacherName> {teacherName} </St.TeacherName> 
            <St.TeacherScore> ⭐ {teacherScore} </St.TeacherScore> 
        </St.TeacherWrapper>
  );
}

const St = {

    TeacherWrapper: styled.article`
    display: flex;
    flex-direction: column;
    `,

    TeacherImg: styled.div`
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
