import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { styled } from 'styled-components';
import { GoogleIcon, KakaoIcon, StarIcon } from '../assets';
import { useRecoilState } from 'recoil';
import { IsLoggedInState } from '../atom/LoginInfo';

export default function LoginPage() {

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedInState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return unsubscribe;
  }, []);

  // 로그인
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        // 로그인 성공
        setIsLoggedIn(true);
        moveToSignup();

      })
      .catch((error) => {
        // 로그인 실패 
        console.log(error);
      });
  };

  const moveToSignup = async () => {
    const uid = auth.currentUser?.uid;

    const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/user-isExist?uId=${uid}`);
    const reponseData = await response.json();
    
    if(reponseData) navigate('/home');
    else navigate('/signup')
  }

  return (
    <St.LoginPageWrapper>
      <St.AppNameContainer>
        <St.Explain>부모들의 재능을</St.Explain>
        <St.AppName>모아모아</St.AppName>
      </St.AppNameContainer>
      <St.AppLogoContainer>
        <St.AppLogo/>
      </St.AppLogoContainer>
      <St.LoginButtonContainer>
        <StKakaoLoginButton>
          <KakaoIcon/>
          <St.Text>카카오톡으로 계속하기</St.Text>
        </StKakaoLoginButton>
        <StGoogleLoginButton onClick={handleGoogleLogin}>
          <GoogleIcon/>
          <St.Text>Google로 계속하기</St.Text>
        </StGoogleLoginButton>
        <St.EmailLoginLink >다른 이메일로 계속하기</St.EmailLoginLink>
      </St.LoginButtonContainer>
    </St.LoginPageWrapper>
    
  );
}

const St = {
  LoginPageWrapper: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  AppNameContainer: styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 3rem;
  `,
  AppLogoContainer: styled.div`
    display: flex;
    justify-content: center;

    margin: 7rem 0;
  `,
  LoginButtonContainer: styled.div`
    display: flex;
    flex-direction: column;

    text-align: center;
  `,
  AppLogo: styled(StarIcon)`
    width: 8rem;
    height: 8rem;
  `,
  CommonButton: styled.button`
    display: flex;
    align-items: center;

    margin: 0.6rem 2rem; 
    padding: 1rem 1.5rem;

    border-radius: 1rem;
  `,
  Explain: styled.div`
    margin: 1.5rem 0;

    ${({theme}) => theme.fonts.title02};
  `,
  AppName: styled.div`
    ${({theme}) => theme.fonts.title01};
  `,
  Text: styled.div`
    flex: 1;
    padding-right: 1.5rem;
    ${({theme}) => theme.fonts.body06};
  `,
  EmailLoginLink: styled.a`
    margin: 0.7rem 0;

    ${({theme}) => theme.fonts.body07};
    color: ${({ theme }) => theme.colors.Black};
  `

  
}

const StKakaoLoginButton = styled(St.CommonButton)`
  background-color: ${({ theme }) => theme.colors.Kakao};
`

const StGoogleLoginButton = styled(St.CommonButton)`
  border: 0.1rem solid ${({theme}) => theme.colors.Gray_2};
`