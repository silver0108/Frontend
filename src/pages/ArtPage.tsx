import CategoryLesson from '../components/home/CategoryLesson';
import { LessonImg } from "../assets";
import TopBar from '../components/common/TopBar';
import {styled} from 'styled-components';
import {useQuery} from 'react-query';
import {LessonInfo} from '../types/LessonInfo';

export default function ArtPage() {

    let artList;
    
    const { data, isLoading, error } = useQuery('lectures', fetchLesson);

    async function fetchLesson() {
        const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/lectures?categoryId=4`);
        const data = await response.json();
        return data;
    }

    if (isLoading) {
        console.log('loading', data);
    }

    if (data) {
      console.log('Data:', data);
      artList = data;
    }

    if (error) {
        console.log('error', data);
    }

    return (
      <St.ArtWrapper>

        <TopBar message = {"미술 카테고리"} />
        {artList && artList.map((lesson: LessonInfo, idx: number) => (
            <CategoryLesson key={idx} {...lesson} />
        ))}
      </St.ArtWrapper>
    );
}

const St = {
    ArtWrapper: styled.div`
    `
}