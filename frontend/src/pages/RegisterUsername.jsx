import React from "react";

function RegisterUsername() {
  return (
    <>
      <div className="form-group">
        <TextInput
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => {
            onChange(e);
            setAvailability("");
          }}
          error={availability}
          onBlur={handleOnBlur}
        />
      </div>
    </>
  );
}

export default RegisterUsername;
