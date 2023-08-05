import { AllReadIcon, NotReadIcon, SearchIcon, CategoryArtIcon, CategoryEtcIcon, CategoryExerciseIcon, CategoryLanguageIcon, CategoryMusicIcon } from "../../assets";

import { StarIcon } from '../../assets';
import { styled } from 'styled-components';
import {useNavigate} from 'react-router-dom';

export default function Header() {
  
  // 유저가 안 읽은 알림이 있는지 확인하는 API
  let isAlarmExist = true;

  // 알람 버튼 클릭 시 이동
  const navigate = useNavigate();

  function handleMoveToAlarmList () {
    navigate('/alarm-list');
  }

  return (
    <St.HeaderWrapper>

      <St.IconWrapper>
        <St.SearchIc />
        {isAlarmExist ? <St.NotReadIc onClick = {handleMoveToAlarmList} /> : <St.AllReadIc onClick = {handleMoveToAlarmList} />}
      </St.IconWrapper>

      <St.MainWrapper>
        <St.StarIc/>
        <St.Header> 모아모아 </St.Header>
      </St.MainWrapper>
    </St.HeaderWrapper>
  );
}

const St = {
  HeaderWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 37.5rem;
    padding: 1.5rem;
    margin-bottom: 1rem;
  `,
  
  Header: styled.header`
    ${({ theme }) => theme.fonts.title01};
    color: black;
  `,
  
  StarIc: styled(StarIcon)`
    width: 5rem;
  `,

  IconWrapper: styled.div`
    display: flex;
    justify-content: flex-end;
    
    padding: 1rem;
    height: 2.5rem;
  `,

  MainWrapper: styled.div`
    display: flex;
  `,

  AllReadIc: styled(AllReadIcon)`
    margin-top: 0.2rem;
    width: 1.8rem;
    height: 1.8rem;
  `,

  NotReadIc: styled(NotReadIcon)`
  width: 2.2rem;
  height: 2.3rem;
  `,

  SearchIc: styled(SearchIcon)`
  width: 2.3rem;
  height: 2.3rem;
  margin-right: 1rem;
  `,


};


