import { CategoryArtIcon, CategoryEtcIcon, CategoryExerciseIcon, CategoryLanguageIcon, CategoryMusicIcon } from "../../assets";

import { styled } from 'styled-components';

export default function Category() {
    // icon import 오류 해결 필요

    function MoveToCategory(category: string) {
      // category 로 이동하는 로직
    }

    // const categoryImgs = [CategoryLanguageIcon, CategoryExerciseIcon, CategoryArtIcon, CategoryEtcIcon];
    // const categoryNames = ['언어', '운동', '음악', '미술', '기타'];

    const categories = [['언어', CategoryLanguageIcon], ['운동', CategoryExerciseIcon], ['음악', CategoryMusicIcon], ['미술', CategoryArtIcon], ['기타', CategoryEtcIcon];
    return (
      <St.CategoryWrapper>
          {categories.map((category, index) => (
            <St.Category 
              key = {index}
              onClick = {() => MoveToCategory(category[0])}>
              {category[0]}
              {category[1]}
            </St.Category>
          ))}
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
  
  Category: styled.div`
  `,


};

