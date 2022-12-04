import usr_img from "../img/user_image.png";
import { Link } from "react-router-dom";

function TeacherItem({ teacher }) {
  // const subjectList = [];
  // teacher.subjects.forEach((subject) => {
  //   subjectList.push(
  //     <div
  //       key={parseInt(teacher._id) * 1000 + teacher.subjects.indexOf(subject)}
  //     >
  //       <h2>{subject}</h2>

  //       <hr />
  //     </div>
  //   );
  // });
  return (
    <div className="teacherCard">
      <div className="card-container">
        <div className="card-left">
          <img src={usr_img} alt="user" className="card-img" />
        </div>

        <div className="card-center">
          <div>
            {teacher.subjects.map((subject) => (
              <h2 key={parseInt(teacher._id) + Math.random()}>{subject}</h2>
            ))}
          </div>

          {/* <div>{subjectList}</div> */}

          <h3>{teacher.fname + " " + teacher.lname}</h3>

          <h3>Home visits in {teacher.physical.join("/ ")}</h3>
          <h3>
            {teacher.online
              ? "Available for online classes"
              : "No online classes"}
          </h3>
        </div>
        <div className="card-right">
          <Link to={teacher.username}>
            <button className="btn btn-card btn-profile">Profile</button>
          </Link>
          <button className="btn btn-card btn-contact">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default TeacherItem;
