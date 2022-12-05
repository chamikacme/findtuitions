import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useState } from "react";
import ViewProfile from "../components/ViewProfile";

function PublicProfile() {
  const { username } = useParams();

  const [profiledata, setProfiledata] = useState(null);

  useEffect(() => {
    const API_URL = "/api/teachers/";
    axios.get(API_URL + username).then((res) => {
      console.log(res.data);
      setProfiledata(res.data);
    });
  }, [username]);

  if (!profiledata) {
    return <Spinner />;
  }

  if (!profiledata.found) {
    return (
      <>
        <h1>No teacher found!</h1>
      </>
    );
  }

  return (
    <div>
      <ViewProfile data={profiledata.data} />
    </div>
  );
}

export default PublicProfile;
