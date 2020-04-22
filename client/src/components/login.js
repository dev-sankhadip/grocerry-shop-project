import React from "react";
import "./style/login.css";

export const Login = (props) => {
  return (
    <React.Fragment>
      <div className="container p-2">
        <div className="center">
          <div className="mb-2">
            <select class="form-control form-control-sm">
              <option>Select</option>
            </select>
          </div>
          <button type="submit" class="btn btn-sm btn-primary">
            Submit
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
