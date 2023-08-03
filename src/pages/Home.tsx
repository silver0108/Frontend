import BottomBar from '../components/common/BottomBar';
import Category from '../components/home/Category';
import CloseDistanceLessonList from '../components/home/CloseDistanceLessonList';
import Header from '../components/home/Header';
import PopularLessonList from '../components/home/PopularLessonList';
import PopularTeacherList from '../components/home/PopularTeacherList';
import {WritingIcon} from '../assets';
import {styled} from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useQuery} from 'react-query';

export default function Home() {
  
    const navigate = useNavigate();

    function moveToWriting() {
      navigate('/writing');
    }

    
    // 전체 Lecture 정보 get
    /*
    const { data, isLoading, error } = useQuery('lectures', fetchLectures);

    async function fetchLectures() {
        const response = await fetch('http://49.247.157.183:3000/api/lectures');
        const data = await response.json();
        return data;
    }

    if (isLoading) {
        console.log('loading', data);
    }

    if (error) {
        console.log('error', data);
    }
    */
   
    return (
      <St.HomeWrapper>
        <Header />
        <Category />
        <PopularLessonList/>
        <PopularTeacherList/>
        <CloseDistanceLessonList/>
        <BottomBar />
        <St.WritingIc onClick = {()=> moveToWriting()}/>
      </St.HomeWrapper>
    );
}


const St = {
  HomeWrapper: styled.div`
  `,

  WritingIc : styled(WritingIcon)`
  position: fixed;
  right: 1rem;
  bottom: 7rem;

  width: 3.5rem;
  height: 3.5rem;
  `
}