import styled from "styled-components";
import { ReviewProps } from "../types/ReviewData";


const Review = (props:ReviewProps) => {
  const list = props.list;

  return (
    <ReviewWrapper>
      {list.map((review, index) => (
        <St.ReviewContainer key={index}>
          <St.ReviewProfile>
            <img src={review.avatar}/>
            <div>{review.nickname}</div>
          </St.ReviewProfile>
          <St.ReviewInfo>
            <St.RatingContainer>
              <img src={`img/star.png`}></img>
              {review.rating}
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
  RatingContainer: styled.div`
    display: flex;
    margin-bottom: 0.5rem;
  `
}