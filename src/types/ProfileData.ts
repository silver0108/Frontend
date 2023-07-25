import { WritingInfoProps } from "./WritingData";

export interface ProfileProps {
  profile: ProfileInfoProps;
  writing: WritingInfoProps;
}


export interface ProfileInfoProps {
  nickname: string;
  phonenumber: string;
  place: string;
  gender: string;
  age: number;
}

export interface NicknameProps extends Pick<ProfileInfoProps, 'nickname'>{}