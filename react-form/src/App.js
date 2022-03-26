import React, { useState, useRef } from "react";
import { useEffect } from "react";

import "./App.css";

const App = () => {
  const [state, setState] = useState({
    fullname: "",
    framework: {
      reactjs: false,
      nextjs: false,
      angularjs: false,
      sveltejs: false,
      vuejs: false,
    },
    job: {
      frontend: false,
      backend: false,
      fullstack: false,
    },
    motivation: "",
    gender: "",
  });

  const handleOnChange = (e) => {
    const newState = { ...state };
    const { type } = e.target;
    if (type === "radio" || type === "checkbox") {
      if (e.target.name === "job") {
        const jobs = newState[e.target.name];
        const nameOfJob = e.target.value;
        const newJobs = { ...jobs };
        Object.keys(jobs).forEach((val) => {
          val === nameOfJob ? (newJobs[val] = e.target.checked) : (newJobs[val] = false);
        });
        newState[e.target.name] = newJobs;
      } else {
        newState[e.target.name][e.target.value] = e.target.checked;
      }
    } else {
      newState[e.target.name] = e.target.value;
    }

    setState(newState);
  };

  const handleSubmit = (state) => {
    alert(JSON.stringify(state));
  };

  const ref = useRef();

  useEffect(() => {
    console.log(ref);
  }, [ref]);

  return (
    <div>
      {/* controlled component  */}
      <form className="container" onSubmit={() => handleSubmit(state)}>
        <h1>Register</h1>
        <div className="item">
          <label htmlFor="fatherName">Father Name</label>
          <input id="fatherName" type="text" name="fullname" placeholder="Full Name" ref={ref} />
        </div>
        <div className="item">
          <label htmlFor="fullname">Fullname</label>
          <input
            id="fullname"
            type="text"
            name="fullname"
            value={state.fullname}
            placeholder="Full Name"
            onChange={handleOnChange}
          />
        </div>
        <div className="item">
          <label>Framework</label>
          <label htmlFor="reactjs">
            <input
              id="reactjs"
              type="checkbox"
              name="framework"
              value="reactjs"
              checked={state.framework.reactjs}
              onChange={handleOnChange}
            />
            Reactjs
          </label>
          <label htmlFor="nextjs">
            <input
              id="nextjs"
              type="checkbox"
              name="framework"
              value="nextjs"
              checked={state.framework.nextjs}
              onChange={handleOnChange}
            />
            Nextjs
          </label>
          <label htmlFor="angularjs">
            <input
              id="angularjs"
              type="checkbox"
              name="framework"
              value="angularjs"
              checked={state.framework.angularjs}
              onChange={handleOnChange}
            />
            Angularjs
          </label>
          <label htmlFor="sveltejs">
            <input
              id="sveltejs"
              type="checkbox"
              name="framework"
              value="sveltejs"
              checked={state.framework.sveltejs}
              onChange={handleOnChange}
            />
            Sveltejs
          </label>
          <label htmlFor="vuejs">
            <input
              id="vuejs"
              type="checkbox"
              name="framework"
              value="vuejs"
              checked={state.framework.vuejs}
              onChange={handleOnChange}
            />
            Vuejs
          </label>
        </div>
        <div className="item">
          <label>Job</label>
          <label htmlFor="frontend">
            <input
              id="frontend"
              type="radio"
              checked={state.job.frontend}
              name="job"
              value="frontend"
              onChange={handleOnChange}
            />
            Front End Developer
          </label>
          <label htmlFor="backend">
            <input
              id="backend"
              type="radio"
              checked={state.job.backend}
              name="job"
              value="backend"
              onChange={handleOnChange}
            />
            Back End Developer
          </label>
          <label htmlFor="fullstack">
            <input
              id="fullstack"
              type="radio"
              checked={state.job.fullstack}
              name="job"
              value="fullstack"
              onChange={handleOnChange}
            />
            Full Stack Developer
          </label>
        </div>

        {state.job.backend && (
          <div className="item">
            <label htmlFor="motivation">Motivation to be Back end developer?</label>
            <textarea
              id="motivation"
              type="text"
              name="motivation"
              value={state.motivation}
              placeholder="Motivation"
              onChange={handleOnChange}
            />
          </div>
        )}

        {state.job.frontend && (
          <div className="item">
            <label htmlFor="motivation">Motivation to be Front end developer?</label>
            <textarea
              id="motivation"
              type="text"
              name="motivation"
              value={state.motivation}
              placeholder="Motivation"
              onChange={handleOnChange}
            />
          </div>
        )}

        {state.job.fullstack && (
          <div className="item">
            <label htmlFor="motivation">Motivation to be Full stack developer?</label>
            <textarea
              id="motivation"
              type="text"
              name="motivation"
              value={state.motivation}
              placeholder="Motivation"
              onChange={handleOnChange}
            />
          </div>
        )}

        <div className="item">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" value={state.gender} onChange={handleOnChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="item">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
