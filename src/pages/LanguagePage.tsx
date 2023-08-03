import CategoryLesson from '../components/home/CategoryLesson';
import { LessonImg } from "../assets";
import TopBar from '../components/common/TopBar';
import {styled} from 'styled-components';
import {useQuery} from 'react-query';
import {LessonInfo} from '../types/LessonInfo';


export default function LanguagePage() {
    let languageList;
    
    const { data, isLoading, error } = useQuery('lectures', fetchLesson);

    async function fetchLesson() {
        const response = await fetch('http://49.247.157.183:3000/api/lectures?categoryId=1');
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