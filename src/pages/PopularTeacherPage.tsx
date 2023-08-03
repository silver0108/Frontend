import CategoryLesson from '../components/home/CategoryLesson';
import { LessonImg } from "../assets";
import TopBar from '../components/common/TopBar';
import {styled} from 'styled-components';
import useGetPopularTeacher from "../hooks/useGetPopularTeacher";
import {useQuery} from 'react-query';

interface LessonData {
    lessonImg: JSX.Element;
    lessonComment: string;
    lessonExplain: string;
    lessonTeacher: string;
    lessonScore: string;
    lessonDistance: string;
}

export default function PopularTeacherPage() {
    
    let popularTeacherList;
    
    const { data, isLoading, error } = useQuery('lectures', fetchLesson);

    async function fetchLesson() {
        const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/lectures?sort=popular`);
        const data = await response.json();
        return data;
    }

    if (isLoading) {
        console.log('loading', data);
    }

    if (data) {
      console.log('Data:', data);
      popularTeacherList = data;
    }

    if (error) {
        console.log('error', data);
    }
    
    
    
    
    return (
      <St.PopularTeacherWrapper>
        
        <TopBar message = {"인기 급상승 돌봄이들"} />
        {popularTeacherList && popularTeacherList.map((lesson, idx) => (
            <CategoryLesson key={idx} {...lesson} />
        ))}
      </St.PopularTeacherWrapper>
    );
}

const St = {
    PopularTeacherWrapper: styled.div`
    `
}