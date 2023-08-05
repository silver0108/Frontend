import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { TeacherImg2 } from "../../assets";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useRecoilState } from "recoil";
import { UserInfoState } from "../../atom/UserInfo";

interface InputUserProps {
  initialValue?: {
    name: string,
    email: string,
    phonenumber: string,
    place: string,
    gender?: string,
    age?: number,
  }
}

export default function InputProfile (props:InputUserProps) {
  const naviagte = useNavigate();

  const [useData, setUserData] = useRecoilState(UserInfoState);

  const email = auth.currentUser?.email;
  const uid = auth.currentUser?.uid;

  const [name, setName] = useState(props.initialValue?.name || "");
  const [phonenumber, setPhonenumber] = useState(props.initialValue?.phonenumber || "");
  const [place, setPlace] = useState(props.initialValue?.place || "");
  const [gender, setGender] = useState(props.initialValue?.gender || "");
  const [age, setAge] = useState(props.initialValue?.age || undefined);

  const [selectedGender, setSelectedGender ] = useState<number | null>(null);
  const [selectedAge, setSelectedAge ] = useState<number | null>(null);

  const [isComplete, setIsComplete] = useState(false);
  
  const [showNameError, setShowNameError] = useState(false);
  const [showPhonenumberError, setShowPhonenumberError] = useState(false);
  const [showPlaceError, setShowPlaceError] = useState(false);

  const genderList:string[] = [
    '남성', '여성'
  ]

  const ageList:number[] = [
    10, 20, 30, 40, 50, 60
  ]
  useEffect(() => {
    if (name && phonenumber && place !== "") {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [name, phonenumber, place, gender, age]);
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handlePhonenumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhonenumber(e.target.value)
  }

  const handlePlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlace(e.target.value)
  }

  const handleGenderClick = (gender: string, index: number) => {
    if (selectedGender === index) {
      setSelectedGender(null);
      setGender("");
    } else {
      setSelectedGender(index);
      setGender(gender);
    }
  };

  const handleAgeClick = (age: number, index: number) => {
    if (selectedAge === index) {
      setSelectedAge(null);
      setAge(undefined);
    } else {
      setSelectedAge(index);
      setAge(age);
    }
  };

  const handleSubmit = async() => {
    if (name.length !== 2 || name === "") setShowNameError(true); 
    else setShowNameError(false); 
  
    if (phonenumber.length !== 11 || phonenumber === "") setShowPhonenumberError(true);
    else setShowPhonenumberError(false);
    
    if(place === "") setShowPlaceError(true);
    else setShowPlaceError(false);

    if((name.length === 2 || name !== "") &&
    (phonenumber.length === 11 || phonenumber !== "") &&
     place !== ""){
    
      const formData = {
        name: name,
        email: email,
        phone: phonenumber,
        place: place,
        gender: gender,
        age: age,
        uId: uid,
      }

      console.log(formData)
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(formData),
      });
      
      const reponseData = await response.json();
      setUserData(reponseData);

      naviagte('/home');

    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }
}
  return (
    <St.InputProfileWrapper>
      <St.DescriptionContainer>
        <St.Sentence>돌봄이로서, 아이의 부모님으로서 모두에게 보여지는 정보예요.</St.Sentence>
        <St.SecondSentenceContainer>
          <St.RedColorSentence>아이 이름 외에는 부모님 프로필 기준</St.RedColorSentence>
          <St.Sentence>으로 작성해주세요.</St.Sentence>
        </St.SecondSentenceContainer>
      </St.DescriptionContainer>
      
      <St.ImageContainer><TeacherImg2/></St.ImageContainer>
      
      <St.InputContainer>
        <St.WritingSection>
          <St.WritingHeaderContainer>
            <St.WritingHeader>아이 이름</St.WritingHeader>
            <St.Required>*</St.Required>
            {showNameError ? 
              <St.Required>성을 제외한 아이 이름 두 글자로 작성해주세요.</St.Required>
               : null}
          </St.WritingHeaderContainer>
          <St.WritingInput 
            placeholder='준희'
            value={name}
            onChange={handleNameChange} 
          >
          </St.WritingInput>
        </St.WritingSection>

        <St.WritingSection>
          <St.WritingHeaderContainer>
            <St.WritingHeader>휴대폰 번호</St.WritingHeader>
            <St.Required>*</St.Required>
            {showPhonenumberError ? 
              <St.Required>필수 입력입니다.</St.Required>
               : null}
          </St.WritingHeaderContainer>
          <St.WritingInput 
            placeholder='01012345678'
            value={phonenumber}
            onChange={handlePhonenumberChange} 
          >
          </St.WritingInput>
        </St.WritingSection>

        <St.WritingSection>
          <St.WritingHeaderContainer>
            <St.WritingHeader>활동 가능한 장소</St.WritingHeader>
            <St.Required>*</St.Required>
            {showPlaceError ? 
              <St.Required>필수 입력입니다.</St.Required>
               : null}
          </St.WritingHeaderContainer>
          <St.WritingInput 
            placeholder='서울 스페이스 살림 다목적홀'
            value={place}
            onChange={handlePlaceChange} 
          >
          </St.WritingInput>
        </St.WritingSection>
        
        <St.WritingSection>
          <St.WritingHeader>성별</St.WritingHeader>
          <St.WritingCategoryContainer>
            {genderList.map((gender, index) => (
              <St.RadioBoxContainer key={index}>
                <St.RadioBoxInput />
                <St.RadioBoxSpan onClick={() => handleGenderClick(gender, index)} selected={selectedGender === index}>
                  {gender}
                </St.RadioBoxSpan>
              </St.RadioBoxContainer>
            ))}
          </St.WritingCategoryContainer>
        </St.WritingSection>

        <St.WritingSection>
          <St.WritingHeader>연령대</St.WritingHeader>
          <St.WritingCategoryContainer>
            {ageList.map((age, index) => (
              <St.RadioBoxContainer key={index}>
                <St.RadioBoxInput />
                <St.RadioBoxSpan onClick={() => handleAgeClick(age, index)} selected={selectedAge === index}>
                  {age === 60 ? `${age}대 이상` : `${age}대`}
                </St.RadioBoxSpan>
              </St.RadioBoxContainer>
            ))}
          </St.WritingCategoryContainer>
        </St.WritingSection>

          
      </St.InputContainer>
      <St.CompleteButton onClick={handleSubmit}>작성 완료</St.CompleteButton>
    </St.InputProfileWrapper>
  );
}

const St = {
  InputProfileWrapper: styled.div`
    display: flex;
    // justify-content: center;
    align-items: center;
    flex: 1;
    flex-direction: column;
    
    margin: 0 1.5rem;
  `,
  DescriptionContainer: styled.div`
    padding: 1.7rem 1.5rem;
    border-radius: 1.5rem;

    background-color: rgb(251, 210, 98, 30%);
  `,
  ImageContainer: styled.div`
    margin: 2rem 0;
  `,
  InputContainer: styled.div`
  `,

  Sentence: styled.span`
    ${({theme}) => theme.fonts.body07};
    color: ${({theme}) => theme.colors.Black};
  `,
  SecondSentenceContainer: styled.span`
  `,
  RedColorSentence: styled.span`
    ${({theme}) => theme.fonts.body07};
    color: ${({theme}) => theme.colors.Red};
  `,
  WritingSection: styled.div`
    margin: 2rem 0.6rem;
    margin-top: 0.8rem;

    display: flex;
    flex-direction: column;
  `,
  WritingHeaderContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  WritingHeader: styled.span`
    margin: 0.5rem 0;
    margin-right: 0.5rem;
    ${({ theme }) => theme.fonts.body03};
  `,
  Required: styled.span`
    ${({theme}) => theme.fonts.body07};
    color: ${({theme}) => theme.colors.Red}
  `,
  WritingCategoryContainer: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

  `,
  RadioBoxContainer: styled.div`
    margin-right: 1rem;
  `,
  WritingInput: styled.input`
    height: 3rem;
    padding: 2rem 0;

    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.Gray_2};

    background-color: white;  

    &::placeholder {
      ${({ theme }) => theme.fonts.body06};
      color: #9D9D9D;
    }
  `,
 
  RadioBoxInput: styled.input.attrs({type: 'radio', name: 'category'})`
    // position: absolute;
    clip: rect(0, 0, 0, 0);
  `,

  RadioBoxSpan: styled.div<{ selected: boolean }>`
    padding: 0.3rem 1.06rem;
    
    border: 0.1rem solid #E6E6E6;
    border-radius: 50px;
    border-color: ${(props) => (props.selected ? "#FBD262" : "#E6E6E")};
    
    background-color: ${(props) => (props.selected ? "#FEFBE8" : "white")};
    color: ${(props) => (props.selected ? "black" : "#9D9D9D")};
    
    ${({ theme }) => theme.fonts.body07};

    cursor: pointer;
  `,
  CompleteButton: styled.button`
    width: 100%;  
    margin: 1rem;
    padding: 1.2rem 1.5rem;

    border: none;
    border-radius: 1rem;
  
    ${({ theme }) => theme.fonts.body03};

    background-color: #E6E6E6;
    color: black;

    cursor: pointer;

    &:active {
      background-color: ${({ theme }) => theme.colors.Gray_3};
    }
  `,
}