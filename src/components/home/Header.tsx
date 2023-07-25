import { StarIcon } from '../../assets/icon';
import { styled } from 'styled-components';

export default function Header() {
    // icon import 오류 해결 필요
  return (
    <St.HeaderWrapper>
      <St.Header> 모아모아 </St.Header>
    </St.HeaderWrapper>
  );
}

const St = {
  HeaderWrapper: styled.div`
    display: flex;
    width: 37.5rem;
    height: 6.4rem;
    padding: 1.5rem;
  `,
  
  Header: styled.header`
    ${({ theme }) => theme.fonts.title02};
    color: black;
  `,
  
  StarIc: styled(StarIcon)`
    width: 5rem;
  `,
};


