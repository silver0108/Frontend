import { getPopularTeacher } from "../api/getPopularTeacher";
import { useQuery } from "react-query";

export default function useGetPopularTeacher() {
  const { data : popularTeacherList} = useQuery(["getPopularTeacher"], getPopularTeacher, {
    staleTime: 3000,
  });

  console.log(popularTeacherList);
  return { popularTeacherList };
}
