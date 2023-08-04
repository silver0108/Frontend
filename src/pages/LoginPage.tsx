import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { styled } from 'styled-components';

export default function LoginPage() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return unsubscribe;
  }, []);

  // 로그인
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        // 로그인 성공
        setIsLoggedIn(true);
        navigate('/');

      })
      .catch((error) => {
        // 로그인 실패 
        console.log(error);
      });
  };

  // 로그아웃
  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        setIsLoggedIn(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <St.LoginWrapper>
      {isLoggedIn ? (
        <St.LoginButton onClick={handleLogout}>로그아웃</St.LoginButton>
      ):(
        <St.LoginButton onClick={handleLogin}>로그인</St.LoginButton>
      )}
    </St.LoginWrapper>
  );
}

const St = {
  LoginWrapper: styled.div`

  `,
  LoginButton: styled.button`
    ${({theme}) => theme.fonts.body07};
  `
}