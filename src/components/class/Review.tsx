import styled from "styled-components";
import { ReviewProps } from "../../types/ReviewData";
import { StarIcon_1 } from "../../assets";


const Review = (props:ReviewProps) => {
  const list = props.list;

  return (
    <ReviewWrapper>
      {list.map((review, index) => (
        <St.ReviewContainer key={index}>
          <St.ReviewProfile>
            <img src={review.avatar}/>
            <St.ReviewNickname>{review.nickname}</St.ReviewNickname>
          </St.ReviewProfile>
          <St.ReviewInfo>
            <St.RatingContainer>
              <StarIcon_1/>
              <St.Rating>{review.rating}</St.Rating>
            </St.RatingContainer>
            <div>{review.contents}</div>
          </St.ReviewInfo>
        </St.ReviewContainer>
      ))}
    </ReviewWrapper>
  );
};

export default Review;

const ReviewWrapper = styled.div`
  width: 100%;
  // height: 100vh;

  white-space: pre-line;
  
`;

const St = {
  ReviewContainer: styled.div`
    display: flex;
    margin: 1rem; 
  `,
  ReviewProfile: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


  `,
  ReviewInfo: styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 1rem;
  `,
  ReviewNickname: styled.div`
  ${({ theme }) => theme.fonts.body07};
  `,
  RatingContainer: styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 0.5rem;

    ${({ theme }) => theme.fonts.body07};
  `,
  Rating: styled.div`
  `
}