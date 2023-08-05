import { atom } from 'recoil';

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
})