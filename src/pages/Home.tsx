import Header from '../components/home/Header';
import Category from '../components/home/Category';

import PopularLessonList from '../components/home/PopularLessonList';

import CloseDistanceLessonList from '../components/home/CloseDistanceLessonList';
import PopularTeacherList from '../components/home/PopularTeacherList';
import {styled} from 'styled-components';

export default function Home() {
  
    return (
      <St.HomeWrapper>
        <Header />
        <Category />
        <PopularLessonList/>
        <PopularTeacherList/>
        <CloseDistanceLessonList/>
      </St.HomeWrapper>
    );
}


const St = {
  HomeWrapper: styled.div`
  `,
}