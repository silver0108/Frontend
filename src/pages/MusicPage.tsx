import CategoryLesson from '../components/home/CategoryLesson';
import { LessonImg } from "../assets";
import TopBar from '../components/common/TopBar';
import {styled} from 'styled-components';
import {useQuery} from 'react-query';
import {LessonInfo} from '../types/LessonInfo';

export default function MusicPage() {
    // api get 해올 부분

    let musicList;
    
    const { data, isLoading, error } = useQuery('lectures', fetchLesson);

    async function fetchLesson() {
        const response = await fetch('http://49.247.157.183:3000/api/lectures?categoryId=3');
        const data = await response.json();
        return data;
    }

    if (isLoading) {
        console.log('loading', data);
    }

    if (data) {
      console.log('Data:', data);
      musicList = data;
    }

    if (error) {
        console.log('error', data);
    }

   
    return (
      <St.MusicWrapper>
        <TopBar message = {"음악 카테고리"} />
        {musicList && musicList.map((lesson: LessonInfo, idx: number) => (
            <CategoryLesson key={idx} {...lesson} />
        ))}
      </St.MusicWrapper>
    );
}

const St = {
    MusicWrapper: styled.div`
    `
}