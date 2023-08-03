import CategoryLesson from '../components/home/CategoryLesson';
import { LessonImg } from "../assets";
import TopBar from '../components/common/TopBar';
import {styled} from 'styled-components';
import {useQuery} from 'react-query';

interface LessonData {
    lessonImg: JSX.Element;
    lessonComment: string;
    lessonExplain: string;
    lessonTeacher: string;
    lessonScore: string;
    lessonDistance: string;
}

export default function CloseDistanceTeacherPage() {

    let closeDistanceList;
    
    const { data, isLoading, error } = useQuery('lectures', fetchLesson);

    async function fetchLesson() {
        const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/lectures?sort=distance`);
        const data = await response.json();
        return data;
    }

    if (isLoading) {
        console.log('loading', data);
    }

    if (data) {
      console.log('Data:', data);
      closeDistanceList = data;
    }

    if (error) {
        console.log('error', data);
    }
    
    
    
    return (
      <St.CloseDistanceTeacherWrapper>

        <TopBar message = {"거리가 가까운 돌봄이들"} />
        {closeDistanceList.map((lesson, idx) => (
            <CategoryLesson key={idx} {...lesson} />
        ))}
      </St.CloseDistanceTeacherWrapper>
    );
}

const St = {
    CloseDistanceTeacherWrapper: styled.div`
    `
}