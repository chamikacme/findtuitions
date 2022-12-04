import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { reset, getTeacher } from "../features/teachers/teacherSlice";
import axios from "axios";
import { useState } from "react";
import ViewProfile from "../components/ViewProfile";

function PublicProfile() {
  const { username } = useParams();

  const [profileData, setProfileData] = useState(null);

  const getTeacherData = () => {
    const teacherUsername = username;
    const API_URL = "/api/teachers/";
    axios.get(API_URL + teacherUsername).then((res) => {
      console.log(res.data);
      setProfileData(res.data);
    });
  };

  useEffect(() => {
    const teacherUsername = username;
    const API_URL = "/api/teachers/";
    axios.get(API_URL + teacherUsername).then((res) => {
      console.log(res.data);
      setProfileData(res.data);
    });
  }, []);

  if (!profileData) {
    return <Spinner />;
  }

  if (!profileData.found) {
    return (
      <>
        <h1>No teacher found!</h1>
      </>
    );
  }

  return (
    <div>
      <ViewProfile data={profileData.data} />
    </div>
  );
}

export default PublicProfile;
