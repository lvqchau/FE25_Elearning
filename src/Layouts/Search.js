import React from "react";
import "../css/_search.scss";

const Search = () => {
  return (
    <div className="search">
      <div className="row">
        <div className="container search__content">
          <div className="row search__title">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <h1>SEARCH YOUR FUTURE RIGHT NOW!</h1>
              <h6>
                Learn technology, creative and business skills you can use
                today.
              </h6>
            </div>
          </div>
          <div className="row search__bar">
            <input
              className="search__input"
              type="text"
              placeholder="Type Keyword"
            />
            <button className="search__button" type="submit">
              SEARCH
            </button>
          </div>
          <div className="row search__info">
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 info__item">
              <span className="lnr lnr-users" />
              <h6>More than 320 Instructors are Available</h6>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 info__item">
              <span className="lnr lnr-book" />
              <h6>More than 3020 Online Courses Available</h6>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 info__item">
              <span className="lnr lnr-laptop-phone" />
              <h6>Learn Skills on any Devices anytime</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
