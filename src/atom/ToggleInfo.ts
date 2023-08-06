import { atom } from 'recoil';

export const ToggleInfo = atom<boolean>({
  key: 'ToggleInfo',
  default: false,
});