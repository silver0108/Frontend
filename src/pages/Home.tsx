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

interface LessonInfo {
  id: number;
  userId: number;
  categoryId: number;
  title: string;
  description: string;
  distance: number;
  participants: number;
  maxParticipants: number;
  talent: string;
  hashtags: string;
  price: number;
  imageUrl: null;
  createdAt: string;
}

interface TeacherInfo {
  id: number;
  name: string;
  rating: number;
  imageUrl: string;
  gender: string;

}
export default function Home() {
  
    const navigate = useNavigate();

    function moveToWriting() {
      navigate('/writing');
    }

    // 인기순, 추천순, 거리순 api 
    const { data, isLoading, error } = useQuery('featured', fetchLectures);

    async function fetchLectures() {
        const response = await fetch('http://49.247.157.183:3000/api/featured');
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

    const distance = data?.distance;
    const teachers = data?.teachers;
    const popular = data?.popular;

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

    if (data) {
      console.log('Data:', data);
  }
  

    if (error) {
        console.log('error', data);
    }
    
   */
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