import React from "react";
import "./index.scss";

const Form = () => {
  return (
    <form>
      <input placeholder="Your name" type="text" />
      <input placeholder="Email" type="email" />
      <input placeholder="Phone" type="text" />
      <p>+38 (XXX) XXX - XX - XX</p>
      <div className="position-select">
        <label className="radio-title">Select your position</label>

        <div className="radio-group">
          <input id="frontend" type="radio" name="position" />
          <label htmlFor="frontend">Frontend developer</label>
        </div>
        <div className="radio-group">
          <input id="backend" type="radio" name="position" />
          <label htmlFor="backend">Backend developer</label>
        </div>
        <div className="radio-group">
          <input id="designer" type="radio" name="position" />
          <label htmlFor="designer">Designer</label>
        </div>
        <div className="radio-group">
          <input id="qa" type="radio" name="position" />
          <label htmlFor="qa">QA</label>
        </div>
      </div>
      <input type="file" />
      <button className="button">Save</button>
    </form>
  );
};

export default Form;
