import styled from "styled-components";

import { ProfileProps } from "../../types/ProfileData";
import { DistanceIcon, StarIcon_1 } from "../../assets";
import { useRecoilValue } from "recoil";
import { ClassInfoState } from "../../atom/ClassInfo";


const ProfileInfo = () => {
  
  const data = useRecoilValue(ClassInfoState);

  return (
    <St.ProfileInfoWrapper>
      <St.ProfileInfoContainer>
        <St.ProfileImageContainer>
          <St.ProfileImage src={data.user.imageUrl}></St.ProfileImage>
        </St.ProfileImageContainer>
        <St.ProfileInfoContents>
          <St.ProfileInfoBox>
            {data.user.gender == 'man' ? (
              <>
                <St.ProfileInfoName>{data.user.username} 아빠</St.ProfileInfoName>
                <St.ProfileInfoAge>40대 남성</St.ProfileInfoAge>
              </>
            ):(
              <>
                <St.ProfileInfoName>{data.user.username} 엄마</St.ProfileInfoName>
                <St.ProfileInfoAge>40대 여성</St.ProfileInfoAge>
              </>
            )}
            
          </St.ProfileInfoBox>
          <St.ProfileInfoCategory>{data.category.title}</St.ProfileInfoCategory>
          <St.ProfileInfoEtcContainer>
            <St.ProfileDistanceContainer>
              <DistanceIcon/>
              <St.ProfileInfoDistance>~{data.distance}m</St.ProfileInfoDistance>
            </St.ProfileDistanceContainer>
            <St.ProfileRatingContiner>
              <StarIcon_1/>
              <St.ProfileInfoRating>{data.user.rating} </St.ProfileInfoRating>
            </St.ProfileRatingContiner>
          </St.ProfileInfoEtcContainer>
        </St.ProfileInfoContents>
      </St.ProfileInfoContainer>

      <St.ProfileInfoTag>
        {/* {data.hashtags.map((tag, index) => (
            <St.ProfileInfoTagContents key={index}>{tag}</St.ProfileInfoTagContents>
        ))} */}
        {data.hashtags}
      </St.ProfileInfoTag>
    </St.ProfileInfoWrapper>
  );
};

export default ProfileInfo;

const St = {
  ProfileInfoWrapper: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-bottom: 1rem;
  `,
  ProfileInfoContainer: styled.div`
    display: flex;
  `,
  ProfileImageContainer: styled.div`
    padding: 1rem;
  `,
  ProfileImage: styled.img`
    width: 8rem;
    border-radius: 50%;
  `,
  ProfileInfoContents: styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    flex-direction: column;

    padding: 1rem;
  `,
  ProfileInfoBox: styled.div`
    
  `,
  ProfileInfoName: styled.span`
    margin-right: 1.5rem;
    ${({ theme }) => theme.fonts.body06};
  `,
  ProfileInfoAge: styled.span`
    ${({ theme }) => theme.fonts.body07};
    color: gray;
    
  `,
  ProfileInfoCategory: styled.div`
    margin: 0.4rem 0;

    ${({ theme }) => theme.fonts.body08};
  `,

  ProfileInfoEtcContainer: styled.div`
    display: flex;
  `,

  ProfileDistanceContainer: styled.div`
    display: flex;
    align-items: center;

    margin-right: 0.5rem;
  `,
  ProfileRatingContiner: styled.div`
    display: flex;
    align-items: center;
  `,
  ProfileInfoDistance: styled.div`
    color: #0094FF;
  `,
  ProfileInfoRating: styled.div`
    ${({ theme }) => theme.fonts.body07};
  `,
  ProfileInfoTag: styled.div`
    padding: 0.5rem 1rem;
    ${({ theme }) => theme.fonts.body07};
  `,

  ProfileInfoTagContents: styled.div`
    float: left;
    background-color: #FAFAFA;
    border: 0.1rem solid #E1E1E3;
    border-radius: 1rem;
    margin: 0.3rem;
    padding: 0.1rem 0.5rem;
  `

}