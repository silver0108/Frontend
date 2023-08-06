export interface ReviewInfo {
  id: number;
  rating: number;
  contents: string;
  createdAt: string;
  user: {
    gender: string;
    id: number;
    imageUrl: string;
    phone: string | null;
    rating: number;
    username: string;
  };
}

export interface ReviewProps {
  reviewlist: ReviewInfo[];
}
