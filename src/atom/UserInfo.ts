import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const UserInfoState = atom({
  key: 'UserInfoState',
  default: {
    id: -1,
    name: "",
    phone: "",
    place: "",
    gender: "",
    age: -1,
    imageUrl: null,
    rating: null,
  },
  effects_UNSTABLE: [persistAtom],
})