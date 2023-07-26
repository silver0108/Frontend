import { StarIcon } from '../../assets';
import { styled } from 'styled-components';
import { CategoryArtIcon, CategoryEtcIcon, CategoryExerciseIcon, CategoryLanguageIcon, CategoryMusicIcon } from "../../assets";

export default function Header() {
    // icon import 오류 해결 필요
  return (
    <St.HeaderWrapper>
        <St.StarIc/>
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


