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
import { useState } from 'react';
export default function Home() {

  // 모달

  const [showModal, setShowModal] = useState(true);
  
  function handleModalClose() {
    setShowModal(false);
  }

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

        {showModal && (
        <St.ModalWrapper>
          <St.ModalContent>
            <St.ModalText>현재는 <span> 동작구 대방동 </span>에서만</St.ModalText>
            <St.ModalText>서비스 이용이 가능합니다</St.ModalText>
            <St.ModalSmallText> 서비스 초기 단계이기에, </St.ModalSmallText> 
            <St.ModalSmallText> 특정 지역에서만 서비스 이용이 가능합니다. </St.ModalSmallText>
            <St.ModalButton onClick={handleModalClose}>확인</St.ModalButton>
          </St.ModalContent>
        </St.ModalWrapper>
      )}
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
  `,

  ModalWrapper: styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`,

ModalContent: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  width: 22rem;
  height: 20rem;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`,

ModalText: styled.p`
  margin-bottom: 0.5rem;
  ${({ theme }) => theme.fonts.body06};
  color: black;

  span {
    color: red;
  }
`,

ModalSmallText: styled.p`
  margin-top: 0.2rem;
  ${({ theme }) => theme.fonts.body07};
  color: ${({ theme }) => theme.colors.Black}; 
`,

ModalButton: styled.button`
  margin-top: 2rem;
  width: 17rem;
  height: 3rem;
  
  ${({ theme }) => theme.fonts.body07};
  background-color: ${({ theme }) => theme.colors.Main}; 
  border: none;
  border-radius: 10px;
  cursor: pointer;
`,
}