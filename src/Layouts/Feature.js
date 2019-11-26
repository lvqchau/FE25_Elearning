import React from "react";
import "../css/_feature.scss";

const Feature = () => {
  return (
    <div className="feature">
      <div className="feature__wrapper">
        <div className="container">
          <div className="row feature__content">
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 feature__left pl-0">
              <div className="feature__box">
                <h3>WHAT YOU GET?</h3>
                <p>
                  <span>You set the pace</span> with online learning. Learn what
                  you want, when you want,and practice with the instructor’s
                  files while you watch and listen.
                </p>
                <ul>
                  <li>4,042 VIDEO COURSES</li>
                  <li>UNLIMITED ACCESS</li>
                  <li>EXPERT TEACHERS</li>
                  <li>VARIETY OF INSTRUCTION</li>
                  <li>ON-THE-GO-LEARNING</li>
                  <li>PASSIONATE EDUCATORS</li>
                  <li>TRUSTED SOURCE</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 feature__middle">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 feature__box">
                  <h6>HOW TO CREATE</h6>
                  <h6>A TECHNICAL GUIDE</h6>
                  <p>
                    An introduction to academic writing for English Language
                    Learners.
                  </p>
                  <h1>$59</h1>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 feature__box">
                  <h6>JOB INTERVIEW</h6>
                  <h6>SUCCESS</h6>
                  <p>
                    A great resume can only get you an interview, but a great
                    interview.
                  </p>
                  <h1>$59</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 feature__right">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 feature__box">
                  <h6>WORK FROM HOME</h6>
                  <h6>5 WAYS</h6>
                  <p>
                    Learn something new every day, making you just a little more
                    knowledgeable.
                  </p>
                  <h1>$79</h1>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 feature__box">
                  <h6>PHOTOSHOP CS6</h6>
                  <h6>FOR BEGINNERS</h6>
                  <p>
                    We deliver you 10-day email courses with high-quality
                    original content in your chosen area of interest.
                  </p>
                  <h1>$109</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
