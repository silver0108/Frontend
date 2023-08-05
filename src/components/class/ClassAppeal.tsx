import styled from "styled-components";
import { WritingProps } from "../../types/WritingData";
import { useRecoilValue } from "recoil";
import { ClassInfoState } from "../../atom/ClassInfo";


const ClassAppeal = () => {
  const data = useRecoilValue(ClassInfoState);

  return (
    <ClassAppealWrapper>
      <St.TitleContainer>
        {data.title}
      </St.TitleContainer>
      <St.ContentsContainer>
        {data.description}
      </St.ContentsContainer>
      
    </ClassAppealWrapper>
  );
};

export default ClassAppeal;

const ClassAppealWrapper = styled.div`
  width: 100%;

  white-space: pre-line;
  padding: 0 0.8rem;
  
`;

const St = {
  TitleContainer: styled.div`
    ${({ theme }) => theme.fonts.body06};

    margin: 3rem 0
  `,
  ContentsContainer: styled.div`
    ${({ theme }) => theme.fonts.body08};
  `
}