import CategoryLesson from '../components/home/CategoryLesson';
import { LessonImg } from "../assets";
import TopBar from '../components/common/TopBar';
import {styled} from 'styled-components';
import {useQuery} from 'react-query';
import {LessonInfo} from '../types/LessonInfo';

export default function ExercisePage() {

    
    let exerciseList;
    
    const { data, isLoading, error } = useQuery('lectures', fetchLesson);

    async function fetchLesson() {
        const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/lectures?categoryId=2`);
        const data = await response.json();
        return data;
    }

    if (isLoading) {
        console.log('loading', data);
    }

    if (data) {
      console.log('Data:', data);
      exerciseList = data;
    }

    if (error) {
        console.log('error', data);
    }


    return (
      <St.ExerciseWrapper>
        <TopBar message = {"운동 카테고리"} />
        {exerciseList && exerciseList.map((lesson: LessonInfo, idx: number) => (
            <CategoryLesson key={idx} {...lesson} />
        ))}
      </St.ExerciseWrapper>
    );
}

const St = {
    ExerciseWrapper: styled.div`
    `
}