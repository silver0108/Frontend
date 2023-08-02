import styled from "styled-components";

import { ProfileProps } from "../../types/ProfileData";


const ProfileInfo = (props:ProfileProps) => {
  const { profile, writing } = props;
  
  const nickname = profile.nickname;
  const age = profile.age;
  const category = writing.category;
  const tags: string[] = writing.tag;

  return (
    <ProfileInfoWrapper>
      <St.ProfileInfoContainer>
        <St.ProfileInfoImage>
          <img src={`img/profile_default.png`}></img>
        </St.ProfileInfoImage>
        <St.ProfileInfoContents>
          <div>
            <span style={{fontSize: "1.1rem", fontWeight: "bold", marginRight: "1rem"}}>{nickname} 선생님</span>
            <span style={{fontSize: "0.9rem"}}>{age}대 남성</span>
          </div>
          <div style={{margin: "0.2rem 0"}}>{category} 교사</div>
          <div style={{display:"flex"}}>
            <div style={{marginRight: "0.5rem"}}>
              <img src={`img/distance.png`}/>
              거리
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
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;

const ProfileInfoWrapper = styled.div`
  width: 100%;
  // height: 100vh;

  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;
  
`;

const St = {
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