import "./Course.css";

export type CourseType = {
  name: string;
  image: string;
  bgColor: string;
};

const Course: React.FC<CourseType> = ({ name, image, bgColor }) => {
  return (
    <div className="course">
      <div className="image-wrraper" style={{ background: bgColor }}>
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
    </div>
  );
};

export default Course;
