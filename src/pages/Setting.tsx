import { styled } from "styled-components"
import TopBar from "../components/common/TopBar"
import { ArrowIcon } from "../assets"
import Toggle from "../components/common/Toggle"

export default function Setting () {
  const list_1 = ['문의하기', '서비스 이용약관'];
  const list_2 = ['로그아웃', '회원탈퇴'];

  const handleToggleChange = (checked: boolean) => {
    console.log(checked);
  };

  return(
    <St.SettingWrapper>
      <TopBar message="설정"/>
      <St.SettingContainer>
        <St.ServiceSetting>
          <St.Setting>
            알림 설정
            <Toggle defaultChecked={false} onChange={handleToggleChange}/>
          </St.Setting>
          {list_1.map((item, index)=> (
            <St.Setting key={index}>
              {item}
              <St.Arrow><ArrowIcon/></St.Arrow>
          </St.Setting>
          ))}
        </St.ServiceSetting>
        <St.UserSetting>
          {list_2.map((item, index)=> (
            <St.Setting key={index}>
              {item}
              <St.Arrow><ArrowIcon/></St.Arrow>
          </St.Setting>
          ))}
        </St.UserSetting>
      </St.SettingContainer>
      <St.Version>Ver 1.0</St.Version>
    </St.SettingWrapper>
  )
}

const St = {
  SettingWrapper: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
  `,
  SettingContainer: styled.div`
    flex: 5;

    margin: 0 3rem;
  `,
  ServiceSetting: styled.div`
    
  `,
  UserSetting: styled.div`
    margin-top: 3rem;
  `,
  Setting: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 0;

    border-bottom: 0.1rem solid ${({theme}) => theme.colors.Gray_2};
    ${({theme}) => theme.fonts.body06};
  `,
  Arrow: styled.button`
  `,
  Version: styled.div`
    flex: 1;

    text-align: center;
    ${({theme}) => theme.fonts.body06};
  `,
}