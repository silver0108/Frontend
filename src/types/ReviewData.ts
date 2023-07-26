export interface ReviewInfoProps {
  avatar: string;
  nickname: string;
  rating: number;
  contents: string;
}

export interface ReviewProps {
  list: ReviewInfoProps[];
}
