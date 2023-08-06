import styled from "styled-components";
import { DefaultProfileImg, StarIcon_1 } from "../../assets";
import { ReviewProps } from "../../types/ReviewInfo";

const Review = (props:ReviewProps) => {
  return (
    <St.ReviewWrapper>
      <St.ScrollableContainer>
        {props.reviewlist.map((review, index) => (
          <St.ReviewContainer key={index}>
            <St.ReviewProfile>
              {review.user.imageUrl === null ? (
                <DefaultProfileImg/>
              ):(
                <St.ReviewUserImage src={review.user.imageUrl}/>
              )}
              <St.ReviewNickname>{review.user.username}</St.ReviewNickname>
            </St.ReviewProfile>
            <St.ReviewInfo>
              {review.rating === null ? (
                <St.NoRating>[ 평가 없음 ]</St.NoRating>
              ):(
                <St.RatingContainer>
                  <StarIcon_1/>
                  <St.Rating>{review.rating}</St.Rating>
                </St.RatingContainer>
              )}
              
              <St.ReviewContents>{review.contents}</St.ReviewContents>
            </St.ReviewInfo>
          </St.ReviewContainer>
        ))}
      </St.ScrollableContainer>
    </St.ReviewWrapper>
  );
};

export default Review;

const St = {
  ReviewWrapper: styled.div`
    width: 100%;

    white-space: pre-line;
  `,
  ScrollableContainer: styled.div`
    max-height: 33rem;

    overflow-y: auto;
  `,
  ReviewContainer: styled.div`
    display: flex;
    margin: 1rem; 


  `,
  ReviewProfile: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  ReviewInfo: styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 1rem;
  `,
  ReviewUserImage: styled.img`
    width: 6rem; 
    height: 6rem;
    
    border-radius: 50%;
    
    object-fit: cover; /
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
  NoRating: styled.div`
    ${({ theme }) => theme.fonts.body07};
  `,
  Rating: styled.div`
  `,
  ReviewContents: styled.div`
    ${({ theme }) => theme.fonts.body07};
  `
}