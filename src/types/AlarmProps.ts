
import {FeaturedInfo} from './FeaturedInfo';

interface AlarmUserProps {
    id: number;
    username: string;
    imageUrl: string;
    gender: string;
}

export interface AlarmProps   {
    alarm: string;
    alarmuser: null | AlarmUserProps;
    time: string;
    lecture: FeaturedInfo;

}