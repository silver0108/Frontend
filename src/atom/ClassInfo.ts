import {LessonInfo} from '../types/LessonInfo';
import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const ClassInfoState = atom<LessonInfo>({
    key: 'ClassInfoState',
    default: {
        id: -1,
        userId: -1,
        categoryId: -1,
        title: "",
        description: "",
        distance: -1,
        participants: -1,
        maxParticipants: -1,
        talent: "",
        hashtags: "",
        price: -1,
        imageUrl: null,
        createdAt: "",
        user : {
            id : -1,
            username: "",
            imageUrl: "",
            rating: -1,
            gender: "",
        },
        category: {
            id: -1,
            title: "",
            subCategory: "",
            imageUrl: null,
        }
    },
    effects_UNSTABLE: [persistAtom],
})