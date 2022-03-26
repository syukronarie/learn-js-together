import * as React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./index.css";

export default function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/" && <button onClick={() => navigate(-1)}>back to previous</button>}
      <Outlet />
    </>
  );
}
