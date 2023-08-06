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

const chattingList = [
    {
      "id": 19,
      "userId": -1,
      "categoryId": -1,
      "title": "자유롭게 영어로 대화할 수 있는 즐거운 영어교실",
      "description": "미국 하버드 출신의 스피킹과 라이팅, 영어의 모든 영역 지도\r\n미국 교과서 수업 (100% 영어로 진행)\r\n누리 학원 9년 강사 출신",
      "distance": 122,
      "participants": 2,
      "maxParticipants": 6,
      "hashtags": "#영어, #4~12세, #학원영어강사출신",
      "price": 15000,
      "talent": "",
      "imageUrl": null,
      "createdAt": "2023-08-02T15:00:00.000Z",
      "user": {
        "id": 1,
        "username": "지혜",
        "imageUrl": "https://kr.object.iwinv.kr/wimb_images/moamoa/%E1%84%89%E1%85%A1%E1%86%AF%E1%84%80%E1%85%AE%20%E1%84%8B%E1%85%A5%E1%86%B7%E1%84%86%E1%85%A1%20%28%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5%20%E1%84%89%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A2%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7%29.png",
        "rating": 4.5,
        "gender": "woman"
      },
      "category": {
        "id": 1,
        "title": "언어",
        "subCategory": "영어",
        "imageUrl": null
      }
    },
    {
      "id": 33,
      "userId": -1,
      "categoryId": -1,
      "title": "맛있는 디저트들을 함께 만들어요~",
      "description": "빵, 과자, 쿠키. \r\n다 아이들이 좋아하는 간식들인데, 이를 아이들이 직접 만들어본다면?\r\n재료 고르는 것부터 설거지까지 모두 함꼐 해볼 수 있는 수업!\r\n빵집에서 다년간 알바해본 경험을 통해, 아이들에게 잊지못할 경험을 선물할게요!\r\n맛있는 수업, 어서 신청하세요!",
      "distance": 210,
      "participants": 2,
      "maxParticipants": 4,
      "talent": "",
      "hashtags": "#베이킹, #5~7세, #빵집알바출신",
      "price": 12000,
      "imageUrl": null,
      "createdAt": "2023-08-02T15:00:00.000Z",
      "user": {
        "id": 17,
        "username": "혜인",
        "imageUrl": "https://kr.object.iwinv.kr/wimb_images/moamoa/%E1%84%92%E1%85%A8%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%8B%E1%85%A5%E1%86%B7%E1%84%86%E1%85%A1%20%28%E1%84%87%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B5%E1%86%BC%20%E1%84%89%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A2%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7%29.png",
        "rating": 4.5,
        "gender": "woman"
      },
      "category": {
        "id": 5,
        "title": "기타",
        "subCategory": "베이킹",
        "imageUrl": null
      }
    },
    {
      "id": 32,
      "userId": -1,
      "categoryId": -1,
      "title": "명필의 기본, 붓으로부터",
      "description": "\"아름다운 서예의 세계로, 명필의 시작은 붓으로부터 \"\r\n지혜와 예술을 배우는 서예 수업으로 여러분의 아이들을 초대합니다!\r\n\r\n아이들은 미와 정성이 담긴 글씨를 통해 우리 문화의 아름다움을 꺠닳을 수 있어요. \r\n서예를 통해 감성과 섬세함을 키우세요. 지금 바로 시작해보세요!",
      "distance": 203,
      "talent": "",
      "participants": 5,
      "maxParticipants": 6,
      "hashtags": "#서예, #5~7세, #자타공인명필가",
      "price": 9620,
      "imageUrl": null,
      "createdAt": "2023-08-02T15:00:00.000Z",
      "user": {
        "id": 16,
        "username": "지민",
        "imageUrl": "https://kr.object.iwinv.kr/wimb_images/moamoa/%E1%84%8C%E1%85%B5%E1%84%86%E1%85%B5%E1%86%AB%20%E1%84%8B%E1%85%A5%E1%86%B7%E1%84%86%E1%85%A1%20%28%E1%84%89%E1%85%A5%E1%84%8B%E1%85%A8%20%E1%84%89%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A2%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7%29%20.png",
        "rating": 4.5,
        "gender": "woman"
      },
      "category": {
        "id": 5,
        "title": "기타",
        "subCategory": "서예",
        "imageUrl": null
      }
    },
    {
      "id": 23,
      "userId": -1,
      "categoryId": -1,
      "title": "축구도 하고, 친구도 사귀는 일석이조 수업입니다!",
      "description": "축구는 아이들의 체력과 협동심을 향상시키는데 아주 좋은 운동입니다.\r\n아이들은 즐거운 환경에서 경기를 통해 적극적인 참여를 유도하여 축구를 즐기며 다양한 친구를 사귈 수 있습니다.",
      "distance": 145,
      "participants": 1,
      "talent": "",
      "maxParticipants": 6,
      "hashtags": "#축구, #5~7세, #조기축구회에이스",
      "price": 10000,
      "imageUrl": null,
      "createdAt": "2023-08-02T15:00:00.000Z",
      "user": {
        "id": 7,
        "username": "제진",
        "imageUrl": "https://kr.object.iwinv.kr/wimb_images/moamoa/%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%B5%E1%86%AB%20%E1%84%8B%E1%85%A1%E1%84%88%E1%85%A1%20%28%E1%84%8E%E1%85%AE%E1%86%A8%E1%84%80%E1%85%AE%20%E1%84%89%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A2%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7%29.png",
        "rating": 4.5,
        "gender": "man"
      },
      "category": {
        "id": 2,
        "title": "운동",
        "subCategory": "축구",
        "imageUrl": null
      }
    },
]

export default function Chatting() {
    
    const navigate = useNavigate();

    function handleMoveToDetail() {
        navigate('/chatting-detail');
    }

    return (
      <St.ChattingWrapper>
        <TopBar message = {"채팅하기"} />
        {chattingList.map((lesson: LessonInfo, idx: number) => (
            <Teacher key={idx} {...lesson} onClick = {handleMoveToDetail}/>
        ))}
        <BottomBar />
      </St.ChattingWrapper>
    );
}


const St = {
    ChattingWrapper: styled.div`
    `
}