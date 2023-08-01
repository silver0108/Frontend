import { styled } from "styled-components";

interface RoundButtonProps {
  buttonMessage: string;
  onClick: () => void;
}

export default function RoundButton(props: RoundButtonProps) {
  const { buttonMessage, onClick } = props;
  return <ButtonWrapper  onClick={onClick}>{buttonMessage}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32rem;
  height: 5rem;
  margin-top: 1.5rem;

  background-color: ${({ theme }) => theme.colors.SUB_2};
  color: black;

  ${({ theme }) => theme.fonts.body03};

  border-radius: 15px;
`;
