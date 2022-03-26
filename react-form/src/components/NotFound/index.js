import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const { teamId } = useParams();

  return (
    <div className="container">
      {!!teamId && (
        <div>
          <h1>Page - 404</h1>
          <h3>Team</h3>
          <p>
            This user <strong>{teamId}</strong> is not found
          </p>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      )}
    </div>
  );
};

export default NotFound;
