import Header from '../components/home/Header';
import Category from '../components/home/Category';
import {styled} from 'styled-components';

export default function Home() {
  
    return (
      <St.HomeWrapper>
        <Header />
        <Category />
      </St.HomeWrapper>
    );
}


const St = {
  HomeWrapper: styled.div`
  `,
}