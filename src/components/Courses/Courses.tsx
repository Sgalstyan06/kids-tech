import Course from "../Course/Course";

import { KidstechType } from "../../services/types";

import "./Courses.css";

interface CoursesProps {
  courses: KidstechType[];
}

const Courses: React.FC<CoursesProps> = ({ courses }) => {
  return (
    <section>
      {courses.map((course) => (
        <Course
          key={course.id}
          name={course.name}
          image={course.image}
          bgColor={course.bgColor}
        />
      ))}
    </section>
  );
};

export default Courses;
