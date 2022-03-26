import React from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import CONST from "../../utils/constant";

export default function Teams() {
  let navigate = useNavigate();
  const params = useParams();

  return (
    <div className="container">
      {!params.teamId && (
        <React.Fragment>
          <p>Teams</p>
          {CONST.teams.map((val) => (
            <div className="teams" key={val.id}>
              <h3>
                Fullname: {val.first_name} {val.last_name}
              </h3>
              {/* <p>Email: {val.email}</p>
          <p>Gender: {val.gender}</p> */}
              <button onClick={() => navigate(`/teams/${val.id}`)}>Show Detail</button>
            </div>
          ))}
          <Link to="/"></Link>
        </React.Fragment>
      )}

      <Outlet />
    </div>
  );
}
