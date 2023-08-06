import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme';
import { useRecoilState } from 'recoil';
import { ToggleInfo } from '../../atom/ToggleInfo';

interface ToggleProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Toggle(props: ToggleProps) {
  const [checked, setChecked] = useRecoilState(ToggleInfo);
  const { defaultChecked, onChange} = props;

  const handleChange = () => {
    setChecked((prev) => !prev);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <St.ToggleWrapper checked={checked}>
      <St.ToggleCheckbox type="checkbox" onChange={handleChange} />
      <St.ToggleSlider checked={checked} />
    </St.ToggleWrapper>
  );
}

const St = {
  ToggleWrapper: styled.label<{ checked: boolean }>`
    position: relative;

    width: 60px;
    height: 30px;

    border-radius: 15px;

    background-color: ${(props) => (props.checked ? '#5cb85c' : theme.colors.Gray_2)};

    cursor: pointer;
  `,
  ToggleSlider: styled.span<{ checked: boolean }>`
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: ${(props) => (props.checked ? '32px' : '2px')};

    width: 26px;

    border-radius: 50%;

    background-color: white;

    transition: left 0.3s;
  `,
  ToggleCheckbox: styled.input`
    display: none;
  `
};