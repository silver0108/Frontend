import {BackBtnIcon} from '../../assets';
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
  message: string;
}

export default function TopBar(props: TopBarProps) {
  const { message } = props;
  const navigate = useNavigate();

  function handleMoveToBack() {
    navigate(-1);
  }
  
  return (
    <St.TopBarWrapper>
      <St.BackBtnIc onClick={handleMoveToBack} />
      {message}
    </St.TopBarWrapper>
  );
}

const St = {
  TopBarWrapper : styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  
  height: 6rem;
  color: black;

  ${({ theme }) => theme.fonts.body06};
  `,

  BackBtnIc : styled(BackBtnIcon)`
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 1.5rem;
  height: 2.5rem;
  `
}