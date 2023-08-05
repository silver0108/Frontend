import CategoryLesson from '../components/home/CategoryLesson';
import { LessonImg } from "../assets";
import {LessonInfo} from '../types/LessonInfo';
import TopBar from '../components/common/TopBar';
import {styled} from 'styled-components';
import {useQuery} from 'react-query';

export default function LanguagePage() {
    let languageList;
    
    const { data, isLoading, error } = useQuery('lectures', fetchLesson);

    async function fetchLesson() {
        const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/lectures?categoryId=1`);
        const data = await response.json();
        return data;
    }

    if (isLoading) {
        console.log('loading', data);
    }

    if (data) {
      console.log('Data:', data);
      languageList = data;
    }

    if (error) {
        console.log('error', data);
    }

    

    return (
      <St.LanguageWrapper>
        
        <TopBar message = {"언어 카테고리"} />
        {languageList && languageList.map((lesson: LessonInfo, idx: number) => (
            <CategoryLesson key={idx} {...lesson} />
        ))}
      </St.LanguageWrapper>
    );
}

const St = {
    LanguageWrapper: styled.div`
    `
}