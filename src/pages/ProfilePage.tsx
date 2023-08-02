import { styled } from "styled-components";
import TopBar from "../components/common/TopBar";

export default function ProfilePage() {

  return(
    <St.ProfilePageWrapper>
      <TopBar message="프로필"/>
      <St.ProfilePageContainer>

        <St.CommonTwoButton>
          
        </St.CommonTwoButton>
      </St.ProfilePageContainer>

    </St.ProfilePageWrapper>
  );
}

const St = {
  ProfilePageWrapper: styled.div`
  `,
  ProfilePageContainer: styled.div`
  `,
  CommonTwoButton: styled.button`
  `

}