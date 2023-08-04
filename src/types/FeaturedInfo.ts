export interface FeaturedInfo {
    id: number;
    title: string;
    description: string;
    distance: number;
    participants: number;
    maxParticipants: number;
    hashtags: string;
    price: number;
    imageUrl: null;
    createdAt: string;
    user : {
        id : number;
        username: string;
        imageUrl: string,
        rating: number,
        gender: string,
    };
    category: {
        id: number,
        title: string,
        subCategory: string,
        imageUrl: null,
    }
}