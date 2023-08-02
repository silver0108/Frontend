import styled from "styled-components";

import { ProfileProps } from "../../types/ProfileData";
import { DistanceIcon, StarIcon_1 } from "../../assets";


const ProfileInfo = (props:ProfileProps) => {
  const { profile, writing } = props;
  
  const nickname = profile.nickname;
  const age = profile.age;
  const category = writing.category;
  const tags: string[] = writing.tag;

  return (
    <St.ProfileInfoWrapper>
      <St.ProfileInfoContainer>
        <St.ProfileInfoImage>
          <img src={`img/profile_default.png`}></img>
        </St.ProfileInfoImage>
        <St.ProfileInfoContents>
          <St.ProfileInfoBox>
            <St.ProfileInfoName>{nickname}</St.ProfileInfoName>
            <St.ProfileInfoAge>{age}대 남성</St.ProfileInfoAge>
          </St.ProfileInfoBox>
          <St.ProfileInfoCategory>{category}</St.ProfileInfoCategory>
          <St.ProfileInfoEtcContainer>
            <St.ProfileDistanceContainer>
              <DistanceIcon/>
              <St.ProfileInfoDistance>거리</St.ProfileInfoDistance>
            </St.ProfileDistanceContainer>
            <St.ProfileRatingContiner>
              <StarIcon_1/>
              <St.ProfileInfoRating>별점 </St.ProfileInfoRating>
            </St.ProfileRatingContiner>
          </St.ProfileInfoEtcContainer>
        </St.ProfileInfoContents>
      </St.ProfileInfoContainer>

      <St.ProfileInfoTag>
        {tags.map((tag, index) => (
            <St.ProfileInfoTagContents key={index}>{tag}</St.ProfileInfoTagContents>
          ))}
      </St.ProfileInfoTag>
    </St.ProfileInfoWrapper>
  );
};

export default ProfileInfo;

const St = {
  ProfileInfoWrapper: styled.div`
    width: 100%;
    // height: 100vh;

    display: flex;
    flex-direction: column;

    margin-bottom: 1rem;
  `,
  ProfileInfoContainer: styled.div`
    display: flex;
  `,
  ProfileInfoImage: styled.div`
    padding: 1rem;
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
    margin: 0.5rem 0;
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
    padding: 0.5rem;
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