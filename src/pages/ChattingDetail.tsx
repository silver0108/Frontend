import BottomBar from '../components/common/BottomBar';
import {LessonInfo} from '../types/LessonInfo';
import Teacher from '../components/home/Teacher';
import TopBar from '../components/common/TopBar';
import {WritingIcon} from '../assets';
import {styled} from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useQuery} from 'react-query';
import {useRecoilState} from 'recoil';
import { useState } from 'react';

export default function ChattingDetail() {
    

    return (
      <St.ChattingWrapper>
        <TopBar message = {"채팅하기"} />
        <BottomBar />
      </St.ChattingWrapper>
    );
}


const St = {
    ChattingWrapper: styled.div`
    `
}