import AlarmContainer from '../components/alarm/AlarmContainer';
import TopBar from '../components/common/TopBar';
import {styled} from 'styled-components';
import {useQuery} from 'react-query';

export default function Alarm() {
    // 푸시알람 허용 페이지 
    return (
      <St.AlarmWrapper>
        <AlarmContainer/>
      </St.AlarmWrapper>
    );
}

const St = {
    AlarmWrapper: styled.div`
    `,
}