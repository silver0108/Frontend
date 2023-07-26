import styled from "styled-components";

import { ProfileProps } from "../../types/ProfileData";
import { StarIcon_1 } from "../../assets";


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
          <div>
            <St.ProfileInfoName>{nickname} 선생님</St.ProfileInfoName>
            <St.ProfileInfoAge>{age}대 남성</St.ProfileInfoAge>
          </div>
          <St.ProfileInfoCategory>{category} 교사</St.ProfileInfoCategory>
          <div style={{display:"flex"}}>
            <div style={{marginRight: "0.5rem"}}>
              <StarIcon_1/>
              <div>거리</div>
            </div>
            <div>
              <img src={`img/star.png`}/>
              별점
            </div>
            
          </div>
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
  `,
  ProfileInfoTag: styled.div`
    padding: 0.5rem;
  `,

  ProfileInfoTagContents: styled.div`
    float: left;
    background-color: #F5F5F5;
    border: 0.1rem solid #E6E6E6;
    border-radius: 1rem;
    margin: 0.3rem;
    padding: 0.1rem 0.3rem;
  `

}