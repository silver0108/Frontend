import { CategoryArtIcon, CategoryEtcIcon, CategoryExerciseIcon, CategoryLanguageIcon, CategoryMusicIcon } from "../../assets";

import { styled } from 'styled-components';
import { useNavigate } from "react-router-dom";

type CategoryInfo = [string, JSX.Element, string];

export default function Category() {

  const navigate = useNavigate();
  
  function MoveToCategory(path: string) {
    // category 로 이동하는 로직
    navigate(path);
  }

  const categories: CategoryInfo[] = [
    ['언어', <CategoryLanguageIcon />, "/language"],
    ['운동', <CategoryExerciseIcon />, "/exercise"],
    ['음악', <CategoryMusicIcon />, "/music"],
    ['미술', <CategoryArtIcon />, "/art"],
    ['기타', <CategoryEtcIcon />, "/etc"]
  ];

  return (
    <St.CategoryWrapper>
      <St.Header> 어떤 카테고리가 있나요? 🧐 </St.Header>
      
      <St.CategoryList>
        {categories.map((category, index) => (
          <St.Category key={index} onClick={()=>MoveToCategory(category[2])}>
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
    padding: 2rem;

    margin-bottom: 3rem;
  `,
  
  Header: styled.header`
    margin-left: 2.5rem;
    margin-bottom: 2rem;
    ${({ theme }) => theme.fonts.body01};
    color: black;
  `,
  
  CategoryList: styled.div`
    display: flex;
    gap: 0.8rem;

    margin-left: 1.6rem;
  `,

  Category: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 8rem;

    cursor:pointer;
  `,

  CategoryImg : styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
  `,
  

  CategoryName: styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => theme.fonts.body04};
    color: black;
  `,

};

