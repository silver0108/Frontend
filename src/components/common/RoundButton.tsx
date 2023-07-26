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

  width: 26rem;
  height: 4rem;
  margin-top: 1.5rem;
  margin-left: 2.8rem;

  background-color: ${({ theme }) => theme.colors.SUB_2};
  color: black;

  ${({ theme }) => theme.fonts.body06};

  border-radius: 0.8rem;
`;
