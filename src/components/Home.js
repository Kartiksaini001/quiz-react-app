import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function Home() {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <div className="row text-white text-center heading">
        A platform that allows you to add various questions in a question bank
        and play a quiz made up of random questions.
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="row text-center">
        <div className="col-12">
          <Link to="/quiz">
            <Button size="lg" color="info">Play Quiz</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
