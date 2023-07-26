import { CategoryArtIcon, CategoryEtcIcon, CategoryExerciseIcon, CategoryLanguageIcon, CategoryMusicIcon } from "../../assets";

import { styled } from 'styled-components';

export default function Category() {
  function MoveToCategory() {
    // category 로 이동하는 로직
  }

  const categories = [
    ['언어', <CategoryLanguageIcon />],
    ['운동', <CategoryExerciseIcon />],
    ['음악', <CategoryMusicIcon />],
    ['미술', <CategoryArtIcon />],
    ['기타', <CategoryEtcIcon />]
  ];

  return (
    <St.CategoryWrapper>

      
      {categories.map((category, index) => (
        <St.Category key={index}>
          <St.CategoryImg>{category[1]}</St.CategoryImg>
          <St.CategoryName>{category[0]}</St.CategoryName>
        </St.Category>
      ))}
    </St.CategoryWrapper>
  );
}
const St = {
    CategoryWrapper: styled.section`
        display: flex;
        width: 37.5rem;
        height: 6.4rem;
        padding: 1.5rem;
  `,
  
  Header: styled.header`
    ${({ theme }) => theme.fonts.title02};
    color: black;
  `,
  
  Category: styled.article`
  `,

  CategoryImg : styled.div`
  
  `,
  

  CategoryName: styled.h1`
  `,

};

