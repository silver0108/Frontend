import AlarmContainer from '../components/alarm/AlarmContainer';
import TopBar from '../components/common/TopBar';
import {styled} from 'styled-components';
import {useQuery} from 'react-query';
import AlarmInfo from '../components/alarm/AlarmInfo';
import {AlarmProps} from '../types/AlarmProps';

const alarmList = [
    {
    "alarm": "정원 마감",
    "alarmuser": null,
    "time": "1분전",
    "lecture": 
      {
        "id": 19,
        "title": "자유롭게 영어로 대화할 수 있는 즐거운 영어교실",
        "description": "미국 하버드 출신의 스피킹과 라이팅, 영어의 모든 영역 지도\r\n미국 교과서 수업 (100% 영어로 진행)\r\n누리 학원 9년 강사 출신",
        "distance": 122,
        "participants": 2,
        "maxParticipants": 6,
        "hashtags": "#영어, #4~12세, #학원영어강사출신",
        "price": 15000,
        "imageUrl": null,
        "createdAt": "2023-08-02T15:00:00.000Z",
        "user": {
          "id": 1,
          "username": "살구",
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
      }
    },
    {
      "alarm": "수업 신청",
      "alarmuser": {
        "id": 10,
        "username": "종훈",
        "imageUrl": "https://kr.object.iwinv.kr/wimb_images/moamoa/%E1%84%89%E1%85%A1%E1%86%AF%E1%84%80%E1%85%AE%20%E1%84%8B%E1%85%A5%E1%86%B7%E1%84%86%E1%85%A1%20%28%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5%20%E1%84%89%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A2%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7%29.png",
        "gender": "man"
      },
      "time": "5분전",
      "lecture": 
        {
          "id": 19,
          "title": "자유롭게 영어로 대화할 수 있는 즐거운 영어교실",
          "description": "미국 하버드 출신의 스피킹과 라이팅, 영어의 모든 영역 지도\r\n미국 교과서 수업 (100% 영어로 진행)\r\n누리 학원 9년 강사 출신",
          "distance": 122,
          "participants": 2,
          "maxParticipants": 6,
          "hashtags": "#영어, #4~12세, #학원영어강사출신",
          "price": 15000,
          "imageUrl": null,
          "createdAt": "2023-08-02T15:00:00.000Z",
          "user": {
            "id": 1,
            "username": "살구",
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
        }
    },
    {
      "alarm": "수업 신청",
      "alarmuser": {
        "id": 11,
        "username": "주희",
        "imageUrl": "https://kr.object.iwinv.kr/wimb_images/moamoa/%E1%84%8C%E1%85%AE%E1%84%92%E1%85%B4%20%E1%84%8B%E1%85%A5%E1%86%B7%E1%84%86%E1%85%A1%20%28%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%A5%20%E1%84%89%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A2%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7%29.png",
        "gender": "woman"
      },
      "time": "1일전",
      "lecture": 
      {
        "id": 19,
        "title": "자유롭게 영어로 대화할 수 있는 즐거운 영어교실",
        "description": "미국 하버드 출신의 스피킹과 라이팅, 영어의 모든 영역 지도\r\n미국 교과서 수업 (100% 영어로 진행)\r\n누리 학원 9년 강사 출신",
        "distance": 122,
        "participants": 2,
        "maxParticipants": 6,
        "hashtags": "#영어, #4~12세, #학원영어강사출신",
        "price": 15000,
        "imageUrl": null,
        "createdAt": "2023-08-02T15:00:00.000Z",
        "user": {
          "id": 1,
          "username": "살구",
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
      }
    },
    {
      "alarm": "수업 신청",
      "alarmuser": {
        "id": 14,
        "username": "지민",
        "imageUrl":  "https://kr.object.iwinv.kr/wimb_images/moamoa/%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A8%20%E1%84%8B%E1%85%A5%E1%86%B7%E1%84%86%E1%85%A1%20%28%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A5%20%E1%84%89%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A2%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7%29.png",
        "gender": "woman"
      },
      "time": "2일전",
      "lecture": 
      {
        "id": 19,
        "title": "자유롭게 영어로 대화할 수 있는 즐거운 영어교실",
        "description": "미국 하버드 출신의 스피킹과 라이팅, 영어의 모든 영역 지도\r\n미국 교과서 수업 (100% 영어로 진행)\r\n누리 학원 9년 강사 출신",
        "distance": 122,
        "participants": 2,
        "maxParticipants": 6,
        "hashtags": "#영어, #4~12세, #학원영어강사출신",
        "price": 15000,
        "imageUrl": null,
        "createdAt": "2023-08-02T15:00:00.000Z",
        "user": {
          "id": 1,
          "username": "살구",
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
      }
    },
    {
      "alarm": "수업 신청",
      "alarmuser": {
        "id": 11,
        "username": "타일",
        "imageUrl":"https://kr.object.iwinv.kr/wimb_images/moamoa/%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%B5%E1%86%AB%20%E1%84%8B%E1%85%A1%E1%84%88%E1%85%A1%20%28%E1%84%8E%E1%85%AE%E1%86%A8%E1%84%80%E1%85%AE%20%E1%84%89%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A2%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7%29.png",
        "gender": "man"
      },
      "time": "3일전",
      "lecture": 
      {
        "id": 19,
        "title": "자유롭게 영어로 대화할 수 있는 즐거운 영어교실",
        "description": "미국 하버드 출신의 스피킹과 라이팅, 영어의 모든 영역 지도\r\n미국 교과서 수업 (100% 영어로 진행)\r\n누리 학원 9년 강사 출신",
        "distance": 122,
        "participants": 2,
        "maxParticipants": 6,
        "hashtags": "#영어, #4~12세, #학원영어강사출신",
        "price": 15000,
        "imageUrl": null,
        "createdAt": "2023-08-02T15:00:00.000Z",
        "user": {
          "id": 1,
          "username": "살구",
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
      }
    },
    {
      "alarm": "수업 완료",
      "alarmuser": null,
      "time": "4일전",
      "lecture": 
      {
        "id": 20,
        "title": "애니메이션을 자막 없이 볼 수 있게! 생생한 일본어교실",
        "description": "아이들이 좋아하는 일본 애니메이션을 함께 보며\r\n즐겁게 공부. \r\n스트레스 받지 않고 웃으며 일본어를 접할 수 있는 수업",
        "distance": 130,
        "participants": 1,
        "maxParticipants": 4,
        "hashtags": "#일본어, #5~7세, #일본어과외다수",
        "price": 12000,
        "imageUrl": null,
        "createdAt": "2023-08-02T15:00:00.000Z",
        "user": {
          "id": 2,
          "username": "지혜",
          "imageUrl": "https://kr.object.iwinv.kr/wimb_images/moamoa/%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A8%20%E1%84%8B%E1%85%A5%E1%86%B7%E1%84%86%E1%85%A1%20%28%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A5%20%E1%84%89%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A2%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7%29.png",
          "rating": 4.2,
          "gender": "woman"
        },
        "category": {
          "id": 1,
          "title": "언어",
          "subCategory": "일본어",
          "imageUrl": null
        }
      }
    },
    {
      "alarm": "수업 시작",
      "alarmuser": null,
      "time": "4일전",
      "lecture": 
      {
        "id": 20,
        "title": "애니메이션을 자막 없이 볼 수 있게! 생생한 일본어교실",
        "description": "아이들이 좋아하는 일본 애니메이션을 함께 보며\r\n즐겁게 공부. \r\n스트레스 받지 않고 웃으며 일본어를 접할 수 있는 수업",
        "distance": 130,
        "participants": 1,
        "maxParticipants": 4,
        "hashtags": "#일본어, #5~7세, #일본어과외다수",
        "price": 12000,
        "imageUrl": null,
        "createdAt": "2023-08-02T15:00:00.000Z",
        "user": {
          "id": 2,
          "username": "지혜",
          "imageUrl": "https://kr.object.iwinv.kr/wimb_images/moamoa/%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A8%20%E1%84%8B%E1%85%A5%E1%86%B7%E1%84%86%E1%85%A1%20%28%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A5%20%E1%84%89%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A2%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7%29.png",
          "rating": 4.2,
          "gender": "woman"
        },
        "category": {
          "id": 1,
          "title": "언어",
          "subCategory": "일본어",
          "imageUrl": null
        }
      }
    },
    {
      "alarm": "수업 성사",
      "alarmuser": null,
      "time": "4일전",
      "lecture": 
      {
        "id": 20,
        "title": "애니메이션을 자막 없이 볼 수 있게! 생생한 일본어교실",
        "description": "아이들이 좋아하는 일본 애니메이션을 함께 보며\r\n즐겁게 공부. \r\n스트레스 받지 않고 웃으며 일본어를 접할 수 있는 수업",
        "distance": 130,
        "participants": 1,
        "maxParticipants": 4,
        "hashtags": "#일본어, #5~7세, #일본어과외다수",
        "price": 12000,
        "imageUrl": null,
        "createdAt": "2023-08-02T15:00:00.000Z",
        "user": {
          "id": 2,
          "username": "지혜",
          "imageUrl": "https://kr.object.iwinv.kr/wimb_images/moamoa/%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A8%20%E1%84%8B%E1%85%A5%E1%86%B7%E1%84%86%E1%85%A1%20%28%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A5%20%E1%84%89%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A2%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7%29.png",
          "rating": 4.2,
          "gender": "woman"
        },
        "category": {
          "id": 1,
          "title": "언어",
          "subCategory": "일본어",
          "imageUrl": null
        }
      }
    }
]

export default function AlarmList() {
    
    // 알람 리스트 GET 해오기 -> 현재 dummy로 대체



    // 해당 리스트에 대하여 AlarmInfo에 props 넘겨 주기

    return (
      <St.AlarmWrapper>
        <TopBar message = {"알림"}/>
        {alarmList.map((alarm: AlarmProps, idx: number) => 
        <AlarmInfo key = {idx} {...alarm} /> )}
      </St.AlarmWrapper>
    );
}

const St = {
    AlarmWrapper: styled.div`
    `,
}