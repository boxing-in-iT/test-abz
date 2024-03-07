import React from "react";
import "./index.scss";

import cover from "../../assets/img/cover.jpeg";

const Welcome = () => {
  return (
    <section style={{ backgroundImage: `url(${cover})` }}>
      <div className="overlay"></div>
      <div className="container">
        <h1>Test assignment for front-end developer</h1>
        <p>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <button className="button">Sign up</button>
      </div>
    </section>
  );
};

export default Welcome;
