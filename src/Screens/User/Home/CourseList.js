import React, { useEffect } from "react";
import { connect } from "react-redux";
import CourseItem from "./CourseItem";
import { fetchCourses, changePageCourse } from "../../../Redux/Actions/Course";
import Pagination from "../../../Components/Pagination";
import "../../../css/_courseList.scss";

const CourseList = ({ dispatch, courses, pageIndex }) => {
  useEffect(() => {
    dispatch(fetchCourses(pageIndex, 16));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _renderCourseItem = () => {
    return courses.items.map((item, index) => (
      <div className="col-3" key={index}>
        <CourseItem course={item} />
      </div>
    ));
  };

  const _changePage = chosenPage => {
    dispatch(changePageCourse(chosenPage));
    dispatch(fetchCourses(chosenPage, 8));
  };

  return (
    <>
      <div className="course_list">
        <br />
        <br />
        <br />
        <br />
        <div className="breadcrumb">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <h1>COURSES</h1>
              <h6>HOME/COURSES</h6>
            </div>
          </div>
        </div>
        <div className="stat">
          <div className="container px-3">
            <div className="row">
              <div
                className="col-sm-2 col-md-2 col-lg-2 col-xl-2 px-0 stat__item"
                style={{ background: "#2abfd4" }}
              >
                <h6>DEVELOPER</h6>
                <span className="lnr lnr-laptop-phone" />
                <div className="stat__number">224</div>
              </div>
              <div
                className="col-sm-2 col-md-2 col-lg-2 col-xl-2 px-0 stat__item"
                style={{ background: "#ffc000" }}
              >
                <h6>PHOTOGRAPHER</h6>
                <span className="lnr lnr-camera" />
                <div className="stat__number">224</div>
              </div>
              <div
                className="col-sm-2 col-md-2 col-lg-2 col-xl-2 px-0 stat__item"
                style={{ background: "#1a71b0" }}
              >
                <h6>DESIGN</h6>
                <span className="lnr lnr-briefcase" />
                <div className="stat__number">224</div>
              </div>
              <div
                className="col-sm-2 col-md-2 col-lg-2 col-xl-2 px-0 stat__item"
                style={{ background: "#ff9d00" }}
              >
                <h6>EDUCATION</h6>
                <span className="lnr lnr-book" />
                <div className="stat__number">224</div>
              </div>
              <div
                className="col-sm-2 col-md-2 col-lg-2 col-xl-2 px-0 stat__item"
                style={{ background: "#4c699e" }}
              >
                <h6>VIDEO</h6>
                <span className="lnr lnr-camera-video" />
                <div className="stat__number">224</div>
              </div>
              <div
                className="col-sm-2 col-md-2 col-lg-2 col-xl-2 px-0 stat__item"
                style={{ background: "#624aad" }}
              >
                <h6>LANGUAGE</h6>
                <span className="lnr lnr-flag" />
                <div className="stat__number">224</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container col-md-10">
          <div className="row">{_renderCourseItem()}</div>
          <Pagination
            _changePage={_changePage}
            totalPages={courses.totalPages}
            pageIndex={pageIndex}
          />
        </div>
      </div>
    </>
  );
};

export default connect(state => ({
  courses: state.course.courses || { items: [] },
  pageIndex: state.course.pageIndex
}))(CourseList);
