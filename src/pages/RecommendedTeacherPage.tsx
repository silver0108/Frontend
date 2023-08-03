import Teacher from '../components/home/Teacher';
import { LessonImg } from "../assets";
import TopBar from '../components/common/TopBar';
import {styled} from 'styled-components';
import {useQuery} from 'react-query';

interface TeacherProps {
    teacherImg : JSX.Element;
    teacherName : string;
    teacherCategory : string;
    teacherDistance : string;
    teacherScore : string;
    reviewNumber : string;
}

export default function RecommendedTeacherPage() {

    // api get 해올 부분
    const { data, isLoading, error } = useQuery('users', fetchTeacher);

    async function fetchTeacher() {
        const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/users?sort=recommended`);
        const data = await response.json();
        return data;
    }

    if (isLoading) {
        console.log('loading', data);
    }

    if (data) {
      console.log('Data:', data);
    }

    if (error) {
        console.log('error', data);
    }

    //const teacherList = data;
    
    
    const teacherList: TeacherProps[] = [
        {
            teacherImg: <LessonImg/>,
            teacherName: "준희아빠",
            teacherCategory: "기타",
            teacherDistance: "~234m", 
            teacherScore: "4.5",
            reviewNumber: "12",
        },
        {
            teacherImg: <LessonImg/>,
            teacherName: "준희아빠",
            teacherCategory: "기타",
            teacherDistance: "~234m", 
            teacherScore: "4.5",
            reviewNumber: "12",
        },
        
        {
            teacherImg: <LessonImg/>,
            teacherName: "준희아빠",
            teacherCategory: "기타",
            teacherDistance: "~234m", 
            teacherScore: "4.5",
            reviewNumber: "12",
        },
        
        {
            teacherImg: <LessonImg/>,
            teacherName: "준희아빠",
            teacherCategory: "기타",
            teacherDistance: "~234m", 
            teacherScore: "4.5",
            reviewNumber: "12",
        },
        
        {
            teacherImg: <LessonImg/>,
            teacherName: "준희아빠",
            teacherCategory: "기타",
            teacherDistance: "~234m", 
            teacherScore: "4.5",
            reviewNumber: "12",
        },
    ]
    

    return (
      <St.RecommendedTeacherWrapper>
        <TopBar message = {"추천이 많은 돌봄이들"} />
        {teacherList.map((lesson, idx) => (
            <Teacher key={idx} {...lesson} />
        ))}
      </St.RecommendedTeacherWrapper>
    );
}

const St = {
    RecommendedTeacherWrapper: styled.div`
    display: flex;
    flex-direction: column;
    `
}