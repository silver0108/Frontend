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
      window.scrollTo(0, 0);
      navigate('/writing');
    }

    // 인기순, 추천순, 거리순 api 연결

    const { data, isLoading, error } = useQuery('featured', fetchLectures);

    async function fetchLectures() {
        const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/featured`);
        const data = await response.json();
        return data;
    }

    if (isLoading) {
        console.log('loading', data);
    }

    if (data) {
      console.log('Data:', data);
    }

    if (error) {
        console.log('error', data);
    }

    const popular = data?.popular;
    const teachers = data?.teachers;
    const distance = data?.distance;

    return (

      <St.HomeWrapper>
        <Header />
        <Category />
        {popular && <PopularLessonList props={popular} />}
        {teachers && <PopularTeacherList props={teachers} />}
        {distance && <CloseDistanceLessonList props={distance} />}
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