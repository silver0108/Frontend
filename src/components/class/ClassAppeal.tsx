import styled from "styled-components";
import { WritingProps } from "../../types/WritingData";


const ClassAppeal = (props:WritingProps) => {
  const title = props.contents.title;
  const contents = props.contents.appeal;

  return (
    <ClassAppealWrapper>
      <St.TitleContainer>
        {title}
      </St.TitleContainer>
      <St.ContentsContainer>
        {contents}
      </St.ContentsContainer>
      
    </ClassAppealWrapper>
  );
};

export default ClassAppeal;

const ClassAppealWrapper = styled.div`
  width: 100%;

  white-space: pre-line;
  
`;

const St = {
  TitleContainer: styled.div`
    ${({ theme }) => theme.fonts.body06};

    margin: 3rem 0
  `,
  ContentsContainer: styled.div`

  `
}