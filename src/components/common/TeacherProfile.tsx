import { StarIcon } from '../../assets';
import { styled } from 'styled-components';
import { CategoryArtIcon, CategoryEtcIcon, CategoryExerciseIcon, CategoryLanguageIcon, CategoryMusicIcon } from "../../assets";

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
            <St.TeacherScore> {teacherScore} </St.TeacherScore> 
        </St.TeacherWrapper>
  );
}

const St = {

    TeacherWrapper: styled.article`
    display: flex;
    flex-direction: column;
    `,

    TeacherImg: styled.div`
    width: 3.9rem;
    `,

    TeacherName: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    margin-left: 1rem;
    ${({ theme }) => theme.fonts.body07};
    `,

    TeacherScore: styled.div`
    display: flex;
    justify-content: center;
    margin-left: 1rem;
    ${({ theme }) => theme.fonts.body08};
    `,

}
