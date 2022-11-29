import usr_img from "../img/user_image.png";

function TeacherItem({ teacher }) {
  return (
    <div className="teacherCard">
      <div className="card-container">
        <div className="card-left">
          <img src={usr_img} alt="user" className="card-img" />
        </div>

        <div className="card-center">
          <div>
            {teacher.subjects.map((subject) => (
              <h2>{subject}</h2>
            ))}
          </div>
          <h3>{teacher.fname + " " + teacher.lname}</h3>

          <h3>Class visits in {teacher.physical.join("/ ")}</h3>
          <h3>
            {teacher.online
              ? "Available for online classes"
              : "No online classes"}
          </h3>
        </div>
        <div className="card-right">
          <button className="btn btn-card btn-profile">Profile</button>
          <button className="btn btn-card btn-contact">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default TeacherItem;
