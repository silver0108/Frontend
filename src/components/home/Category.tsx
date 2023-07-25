import { styled } from 'styled-components';
import { CategoryArtIcon, CategoryLanguageIcon, CategoryExerciseIcon, CategoryEtcIcon, CategoryMusicIcon } from "../../assets";
export default function Category() {
    // icon import 오류 해결 필요
  return (
    <St.CategoryWrapper>
        
        <St.Header> 모아모아 </St.Header>
    </St.CategoryWrapper>
  );
}

const St = {
    CategoryWrapper: styled.div`
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

