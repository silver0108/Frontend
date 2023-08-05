import { styled } from "styled-components";
import TopBar from "../components/common/TopBar";
import InputProfile from "../components/user/InputUser";

export default function SignupPage() {
  return(
    <St.SignupPageWrapper>
      <TopBar message="프로필 설정"/>
      <InputProfile/>
    </St.SignupPageWrapper>
  );
}

const St = {
  SignupPageWrapper: styled.div`
    width: 100%;
  `
}