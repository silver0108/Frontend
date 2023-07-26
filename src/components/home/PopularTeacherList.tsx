import { StarIcon } from '../../assets';
import { styled } from 'styled-components';
import { TeacherImg } from "../../assets";
import TeacherProfile from '../common/TeacherProfile';
import RoundButton from '../common/RoundButton';

interface TeacherData {
    teacherImg: JSX.Element;
    teacherName: string;
    teacherScore: number;
}

export default function PopularTeacherList() {

    // data 받아오기
    const teacherList: TeacherData[] = [
        {
            teacherImg: <TeacherImg/>,
            teacherName: "상훈쌤",
            teacherScore: 4.5,
        },
        {
            teacherImg: <TeacherImg/>,
            teacherName: "상훈쌤",
            teacherScore: 4.5,
        },
        {
            teacherImg: <TeacherImg/>,
            teacherName: "상훈쌤",
            teacherScore: 4.5,
        },
        {
            teacherImg: <TeacherImg/>,
            teacherName: "상훈쌤",
            teacherScore: 4.5,
        },
        {
            teacherImg: <TeacherImg/>,
            teacherName: "상훈쌤",
            teacherScore: 4.5,
        },
    ]
    
    
    return (
        <St.PopularLessonListWrapper>
            <St.Header> 100점 선생님들을 소개합니다! </St.Header>
            <St.TeacherLists>
                {teacherList.map((teacher, idx) => (
                <TeacherProfile key={idx} {...teacher} />
                ))}
            </St.TeacherLists>
            <RoundButton buttonMessage = {"다른 선생님들도 보러가기"}/>
        </St.PopularLessonListWrapper>
    );
}

const St = {
    PopularLessonListWrapper: styled.section`
      display: flex;
      flex-direction: column;
      width: 37.5rem;
      margin-top: 3rem;
    `,
    
    Header: styled.header`
      ${({ theme }) => theme.fonts.body03};
      color: black;
      margin-left: 1.6rem;
      margin-bottom: 2rem;
    `,
    
    TeacherLists: styled.div`
        display: flex;
        gap: 2rem;
        margin-left: 2rem;
    `,
  };
