import Teacher from '../components/home/Teacher';
import { LessonImg } from "../assets";
import TopBar from '../components/common/TopBar';
import {styled} from 'styled-components';
import {useQuery} from 'react-query';
import {LessonInfo} from '../types/LessonInfo';

interface TeacherProps {
    teacherImg : JSX.Element;
    teacherName : string;
    teacherCategory : string;
    teacherDistance : string;
    teacherScore : string;
    reviewNumber : string;
}

export default function RecommendedTeacherPage() {

    let recommendedTeacherList;
    
    const { data, isLoading, error } = useQuery('lectures', fetchLesson);

    async function fetchLesson() {
        const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/lectures?sort=recommended`);
        const data = await response.json();
        return data;
    }

    if (isLoading) {
        console.log('loading', data);
    }

    if (data) {
      console.log('Data:', data);
      recommendedTeacherList = data;
    }

    if (error) {
        console.log('error', data);
    }
    
    

    return (
      <St.RecommendedTeacherWrapper>
        <TopBar message = {"추천이 많은 돌봄이들"} />
        {recommendedTeacherList.map((lesson: LessonInfo, idx: number) => (
            <Teacher key={idx} {...lesson} />
        ))}
      </St.RecommendedTeacherWrapper>
    );
}

const St = {
    RecommendedTeacherWrapper: styled.div`
    `
}