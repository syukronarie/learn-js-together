import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { actionRequestGetUser, actionRequestGetUserInit } from "./store/states/getUsers/getUser.actions";
import "./App.css";

function App(props) {
  // const { value } = useSelector((state) => state.increment);
  // const dispatch = useDispatch();
  const { user, dispatchRequestGetUser, dispatchRequestGetUserInit } = props;

  useEffect(() => {
    setTimeout(() => dispatchRequestGetUser(), 3000);
  }, [dispatchRequestGetUser]);

  return (
    <div>
      {user.success
        ? user.data.map((val) => (
            <div key={val.id}>
              <img src={val.picture} alt="" />
              <p>ID: {val.id}</p>
              <p>
                {val.title} {val.firstName} {val.lastaName}
              </p>
            </div>
          ))
        : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRequestGetUser: () => dispatch(actionRequestGetUser()),
    dispatchRequestGetUserInit: () => dispatch(actionRequestGetUserInit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
