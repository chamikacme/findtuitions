import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import { TextInput, Select, SegmentedControl } from "@mantine/core";

function RegisterUserData() {
  const [FormData, setFormData] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });

  const { fname, lname, username, email, phone, password, password2 } =
    FormData;

  const [district, setDistrict] = useState(null);
  const [gender, setGender] = useState("Male");

  const districtData = [
    "Ampara",
    "Anuradhapura",
    "Badulla",
    "Batticaloa",
    "Colombo",
    "Galle",
    "Gampaha",
    "Hambantota",
    "Jaffna",
    "Kalutara",
    "Kandy",
    "Kegalle",
    "Kilinochchi",
    "Kurunegala",
    "Mannar",
    "Matale",
    "Matara",
    "Moneragala",
    "Mullaitivu",
    "Nuwara Eliya",
    "Polonnaruwa",
    "Puttalam",
    "Ratnapura",
    "Trincomalee",
    "Vavuniya",
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { teacher, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || teacher) {
      navigate("/profile");
    }

    dispatch(reset());
  }, [teacher, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    const { value, name, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const teacherData = {
        fname,
        lname,
        username,
        email,
        phone,
        password,
        gender,
        district,
      };
      dispatch(register(teacherData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        {/* <h1>
          <FaUser /> Register
        </h1> */}
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="register-form">
            <div className="form-group">
              <TextInput
                type="text"
                className="form-control"
                id="fname"
                name="fname"
                value={fname}
                placeholder="First name"
                onChange={onChange}
              />

              <TextInput
                type="text"
                className="form-control"
                id="lname"
                name="lname"
                value={lname}
                placeholder="Last name"
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <TextInput
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                placeholder="Username"
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <TextInput
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <TextInput
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={phone}
                placeholder="Phone number"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <TextInput
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={onChange}
              />
              <TextInput
                type="password"
                className="form-control"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirm password"
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <Select
                className="form-control"
                type="text"
                id="district"
                name="district"
                data={districtData}
                value={district}
                placeholder="Select your district"
                onChange={setDistrict}
              />
            </div>

            <div>
              <SegmentedControl
                className="segmented-control"
                id="gender"
                name="gender"
                value={gender}
                onChange={setGender}
                data={[
                  { label: "Male", value: "Male" },
                  { label: "Female", value: "Female" },
                ]}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-block">
                Register
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default RegisterUserData;
