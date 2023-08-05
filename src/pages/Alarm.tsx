import AlarmContainer from '../components/alarm/AlarmContainer';
import Header from '../components/home/Header';
import TopBar from '../components/common/TopBar';
import {styled} from 'styled-components';
import {useQuery} from 'react-query';

export default function Alarm() {

    return (
      <St.AlarmWrapper>
        <Header />
        <AlarmContainer/>
      </St.AlarmWrapper>
    );
}

const St = {
    AlarmWrapper: styled.div`
    `,
}