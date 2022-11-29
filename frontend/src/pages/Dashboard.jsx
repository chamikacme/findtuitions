import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

  const { teacher } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!teacher) {
      navigate("/login");
    }
  }, [teacher, navigate]);

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
        </h1>
        <h4>{teacher && teacher.name}</h4>
      </section>
      <section className="content">
        <p>Email: {teacher && teacher.email}</p>
        <p>Mobile Number: {teacher && teacher.phone}</p>
        <p>Gender: {teacher && teacher.gender}</p>
        <p>District: {teacher && teacher.district}</p>
        <p>Subjects: {teacher && teacher.subject.join("/ ")}</p>
        <p>Physical Classes in: {teacher && teacher.physical.join("/ ")}</p>
        <p>Online Classes: {teacher && teacher.online ? "Yes" : "No"}</p>
      </section>
    </>
  );
}

export default Dashboard;
