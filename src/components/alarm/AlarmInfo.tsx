import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import {TeacherImg} from '../../assets';
import {AlarmProps} from '../../types/AlarmProps';

export default function AlarmInfo(props: AlarmProps) {

    // props 로 선생님 사진, 알림사항, 제목, 시간 넣기
    let headerText;

    if (props.alarm === "정원 마감") {
        headerText = "정원 마감으로 모집이 마감되었습니다";
    } else if (props.alarm === "수업 신청") {
        headerText = props.alarmuser?.gender === 'man' ?
        `${props.alarmuser?.username} 아빠님이 수업을 신청했습니다`
        : `${props.alarmuser?.username} 엄마님이 수업을 신청했습니다`
    } else if (props.alarm === "수업 완료") {
        headerText = "수업이 완료되었습니다";
    } else if (props.alarm === "수업 시작") {
        headerText = "수업이 시작되었습니다";
    } else {
        headerText = "수업이 성사되었습니다";
    }

    let imageSrc;
    if (props.alarm === "수업 신청") {
        imageSrc = props.alarmuser?.imageUrl;
    } else {
        imageSrc = props.lecture.user.imageUrl;
    }
    
    return (
    <St.InfoWrapper>

        <St.ImgWrapper src = {imageSrc} />

        <St.AlarmWrapper>
            <St.Header> {headerText} </St.Header>
            <St.Detail> {props.lecture.title} </St.Detail>
            <St.Time> {props.time} </St.Time>
        </St.AlarmWrapper>
        
    </St.InfoWrapper>
    )

}

const St = {
    InfoWrapper: styled.div`
    display: flex;
    width: 32rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
    `,

    ImgWrapper: styled.img`
    width: 5rem;
    height: 5rem;
    margin-right: 2rem;
    border-radius: 50px;
    `,

    AlarmWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    `,

    Header: styled.h1`
    margin-bottom: 0.2rem;
    ${({theme}) => theme.fonts.body07};
    `,

    Detail: styled.h2`
    margin-bottom: 0.2rem;
    ${({theme}) => theme.fonts.body08};
    `,

    Time: styled.h2`
    
    ${({theme}) => theme.fonts.body08};
    `,
}