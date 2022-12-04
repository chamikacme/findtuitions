import { useState } from "react";
import {
  BsGenderMale,
  BsGenderFemale,
  BsBook,
  BsHouseDoor,
  BsDisplay,
  BsTelephone,
} from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";

function ViewProfile(data) {
  const profileData = data.data;

  const [emailVisible, setEmailVisible] = useState(false);
  const [phoneVisible, setPhoneVisible] = useState(false);

  return (
    <div className="view-profile profile-container">
      <div className="profile-card profile-left-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Q0LnflfIEOFyVezV5_TdxCUrkjjce4R12PCjw_xfNlQLLnx2Sogj4H4XF0AjSQx42TI&usqp=CAU" />
        <h2>{profileData.name}</h2>

        <p>
          <BsHouseDoor className="icon" />
          {profileData.district}
        </p>
        <p>
          {profileData.gender === "Male" ? (
            <BsGenderMale className="icon" />
          ) : (
            <BsGenderFemale className="icon" />
          )}
          {profileData.gender}
        </p>
      </div>

      <div className="profile-card profile-center-card">
        <div className="view-profile-set">
          <h4>Subjects:</h4>
          <div>
            {profileData.subjects.map((subject) => (
              <h3 className="view-profile-label" key={Math.random()}>
                <BsBook className="icon" />
                {subject}
              </h3>
            ))}
          </div>
        </div>

        <div className="view-profile-set">
          <h4>Home visits in (Districts):</h4>
          <div>
            {profileData.physical.map((district) => (
              <h3 className="view-profile-label" key={Math.random()}>
                <CiLocationOn className="icon" />
                {district}
              </h3>
            ))}
          </div>
        </div>
      </div>

      <div className="profile-card profile-right-card">
        <div className="view-profile-set">
          <h4>Online classes:</h4>
          <h3 className="view-profile-label">
            <BsDisplay className="icon" />
            {profileData.online ? (
              <span>Available for online classes</span>
            ) : (
              <span>Not available for online classes</span>
            )}
          </h3>
        </div>

        <div className="view-profile-set">
          <h4>Contact Details:</h4>
          {emailVisible ? (
            <h3 className="view-profile-contact">
              {" "}
              <span className="show-contact">
                <HiOutlineMail className="icon" />
                {profileData.email}
              </span>
            </h3>
          ) : (
            <h3
              className="view-profile-label"
              onClick={() => setEmailVisible(true)}
            >
              {" "}
              <span className="show-contact">Show Email Address</span>
            </h3>
          )}

          {phoneVisible ? (
            <h3 className="view-profile-contact">
              {" "}
              <span className="show-contact">
                <BsTelephone className="icon" />
                {profileData.phone}
              </span>
            </h3>
          ) : (
            <h3
              className="view-profile-label"
              onClick={() => setPhoneVisible(true)}
            >
              {" "}
              <span className="show-contact">Show Phone Number</span>
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;
