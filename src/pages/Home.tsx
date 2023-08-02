import Category from '../components/home/Category';
import CloseDistanceLessonList from '../components/home/CloseDistanceLessonList';
import Header from '../components/home/Header';
import PopularLessonList from '../components/home/PopularLessonList';
import PopularTeacherList from '../components/home/PopularTeacherList';
import {styled} from 'styled-components';
import BottomBar from '../components/common/BottomBar';
import {WritingIcon} from '../assets';
import {useNavigate} from 'react-router-dom';

export default function Home() {
  
    const navigate = useNavigate();

    function moveToWriting() {
      navigate('/writing');
    }

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