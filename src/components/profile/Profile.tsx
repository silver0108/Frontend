import { styled } from 'styled-components';
import { StarIcon_1, TeacherImg2 } from '../../assets';

export default function Profile() {
  let arr1 = ["평균 별점", "내가 올린 모아", "내가 신청한 모아"];
  let arr2 = [4.2, 12, 6];
  
  const handleProfileModify = () => {
    console.log("프로필 수정");
  }

  return (
    <St.ProfileWrapper>
      <St.ProfileContainer>
        <St.ImageContainer>
          <TeacherImg2/>
        </St.ImageContainer>
        <St.NameContainer>
          준희 아빠
        </St.NameContainer>
        <St.ProfileModifyButtonContainer>
          프로필 수정
        </St.ProfileModifyButtonContainer>
      </St.ProfileContainer>

      <St.ProfileInfoContainer>
        <St.InfoContainer>
          <St.ValueContainer>
              4.2 / 5
          </St.ValueContainer>
          <St.KeyContainer>
            <StarIcon_1 />
            <St.Rating>평균 별점</St.Rating>
          </St.KeyContainer>
        </St.InfoContainer>
        <St.InfoContainer style={{borderRight: "1px solid #E6E6E6", borderLeft: "1px solid #E6E6E6"}}>
          <St.ValueContainer>
              4개
          </St.ValueContainer>
          <St.KeyContainer>
            내가 올린 모아
          </St.KeyContainer>
        </St.InfoContainer>
        <St.InfoContainer>
          <St.ValueContainer>
              4개
          </St.ValueContainer>
          <St.KeyContainer>
            내가 신청한 모아
          </St.KeyContainer>
        </St.InfoContainer>
      </St.ProfileInfoContainer>
    </St.ProfileWrapper>
  );
}

const St = {
  ProfileWrapper: styled.div`
    
  `,
  ProfileContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  ProfileInfoContainer: styled.div`
    display: flex;
    justify-content: space-around;

    margin: 1rem;
  `,
  ImageContainer: styled.div`
    margin: 0.7rem 0;
  `,
  NameContainer: styled.div`
    margin: 0.7rem 0;
    ${({ theme }) => theme.fonts.body01};
  `,
  ProfileModifyButtonContainer: styled.button`
    width: 10rem;
    height: 3rem;

    margin: 0.7rem 0;

    background-color: ${({ theme }) => theme.colors.SUB_2};
    color: black;

    ${({ theme }) => theme.fonts.body06};

    border-radius: 10px;

    cursor: pointer;

    &:active {
      background-color: ${({ theme }) => theme.colors.Yellow_3};
    }
  `,
  InfoContainer: styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: column;

    padding: 0.5rem 1rem;
  `,
  KeyContainer: styled.div`
    display: flex;
    align-items: center;

    margin: 0.7rem 0;

    ${({ theme }) => theme.fonts.body07};
    color: ${({ theme }) => theme.colors.Black_3};
  `,
  ValueContainer: styled.div`
    ${({ theme }) => theme.fonts.body01};
  `,
  Rating: styled.div`
  `
};

