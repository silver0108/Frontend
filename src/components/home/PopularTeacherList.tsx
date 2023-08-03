import RoundButton from '../common/RoundButton';
import { StarIcon } from '../../assets';
import { TeacherImg } from "../../assets";
import TeacherProfile from '../common/TeacherProfile';
import { styled } from 'styled-components';
import { useNavigate } from "react-router-dom";

interface TeacherInfo {
    id: number;
    name: string;
    rating: number;
    imageUrl: string;
    gender: string;
}

export default function PopularTeacherList({ props }: { props: TeacherInfo[] }) {

    const navigate = useNavigate();
  
    function MoveToCategory() {
        navigate("/recommended-teacher");
    }

    // data 받아오기
    const teacherList = props;

    return (
        <St.PopularLessonListWrapper>
            <St.Header> 💯점 돌봄이들을 소개합니다! </St.Header>
            <St.TeacherLists>
                {teacherList.map((teacher, idx) => (
                <TeacherProfile key={idx} {...teacher} />
                ))}
            </St.TeacherLists>
            <St.RoundButtonWrapper>
                <RoundButton buttonMessage = {"다른 돌봄이들도 보러가기"}   onClick={()=>MoveToCategory()}/>
            </St.RoundButtonWrapper>
        </St.PopularLessonListWrapper>
    );
}

const St = {
    PopularLessonListWrapper: styled.section`
        display: flex;
        flex-direction: column;
        width: 37.5rem;
        margin-top: 4rem;
    `,
    
    Header: styled.header`
        ${({ theme }) => theme.fonts.body01};
        color: black;
        margin-left: 2.5rem;
        margin-bottom: 2rem;
    `,
    
    TeacherLists: styled.div`
        display: flex;
        gap: 1.8rem;
        margin-left: 2.4rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    `,

    RoundButtonWrapper: styled.div`
        display: flex;
        justify-content: center;
    `
  };
