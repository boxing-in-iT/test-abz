import React from "react";
import "./index.scss";

const Form = () => {
  return (
    <form>
      <input placeholder="Your name" type="text" />
      <input placeholder="Email" type="email" />
      <input placeholder="Phone" type="text" />
      <p>+38 (XXX) XXX - XX - XX</p>
      <label>Select your position</label>
      <input type="radio" name="frontend" />
      <label for="frontend">Frontend developer</label>
      <input type="radio" name="backend" />
      <label for="backend">Backend developer</label>
      <input type="radio" name="designer" />
      <label for="designer">Designer</label>
      <input type="radio" name="qa" />
      <label for="qa">QA</label>
    </form>
  );
};

export default Form;
