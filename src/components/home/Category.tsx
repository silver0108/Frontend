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
      <St.Header> 어떤 카테고리가 있나요? </St.Header>
      
      <St.CategoryList>
        {categories.map((category, index) => (
          <St.Category key={index}>
            <St.CategoryImg>{category[1]}</St.CategoryImg>
            <St.CategoryName>{category[0]}</St.CategoryName>
          </St.Category>
        ))}
      </St.CategoryList>
    </St.CategoryWrapper>
  );
}

const St = {
  CategoryWrapper: styled.section`
    display: flex;
    flex-direction: column;

    width: 37.5rem;
    height: 16rem
    padding: 1.5rem;
  `,
  
  Header: styled.header`
    margin-left: 1.6rem;
    margin-bottom: 1.6rem;
    ${({ theme }) => theme.fonts.body03};
    color: black;
  `,
  
  CategoryList: styled.div`
    display: flex;
    gap: 0.6rem;

    margin-left: 1.6rem;
  `,

  Category: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 7rem;
  `,

  CategoryImg : styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 4rem;
    margin-bottom: 0.8rem;
  `,
  

  CategoryName: styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => theme.fonts.body05};
    color: black;
  `,

};

