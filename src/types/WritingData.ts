export interface WritingProps {
  contents: WritingInfoProps;
}

export interface WritingInfoProps {
  title: string;
  personnel: number;
  category: string;
  tag: string[];
  appeal: string;
  price: number;
}

export interface PriceProps extends Pick<WritingInfoProps, 'price'>{}

export interface UploadClassProps {
  list: WritingInfoProps[];
}

export interface ApplyClassInfoProps {
  title: string;
  nickname: string;
  rating: number;
  avatar: string;
  distance: number;
}

export interface ApplyClassProps {
  list: ApplyClassInfoProps[];
}