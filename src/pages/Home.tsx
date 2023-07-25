import Header from '../components/home/Header';
import {styled} from 'styled-components';

export default function Home() {
  
    return (
      <St.HomeWrapper>
        <Header />
        <h1> 안녕</h1>
      </St.HomeWrapper>
    );
}


const St = {
  HomeWrapper: styled.div`
  `,
}