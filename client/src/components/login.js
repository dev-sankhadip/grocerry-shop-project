import React, { useState } from "react";
import "./style/login.css";

export const Login = (props) => {
  const [name, setName] = useState("");
  const UpdateName = (e) => {
    setName(e.target.value);
  };

  const Submit = () => {
    console.log(name);
    props.history.push("/dashboard");
  };

  return (
    <React.Fragment>
      <div className="container p-2">
        <div className="center">
          <div className="mb-2">
            <select className="form-control form-control-sm" onChange={UpdateName}>
              <option value="1">Sankha</option>
              <option value="2">Arun</option>
              <option value="3">Tanishq</option>
            </select>
          </div>
          <button type="button" className="btn btn-sm btn-primary" onClick={Submit}>
            Submit
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
