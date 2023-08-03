import { styled } from 'styled-components';
import NoContents from './NoContents';

export default function MyApplyClass() {

  return (
    <St.MyApplyClassWrapper>
      <NoContents type={1}></NoContents>
    </St.MyApplyClassWrapper>
  );
}

const St = {
  MyApplyClassWrapper: styled.div`
    margin: 0 1rem;
  `,


};

