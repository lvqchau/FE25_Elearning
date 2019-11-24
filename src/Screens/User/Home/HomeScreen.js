import React, { useEffect } from "react";
import { connect } from "react-redux";

import CourseItem from "./CourseItem";

import { fetchCourses, changePageCourse } from "../../../Redux/Actions/Course";
import Pagination from "../../../Components/Pagination";
import Carousel from "../../../Layouts/Carousel";

const HomeScreen = ({ dispatch, courses, pageIndex }) => {
  useEffect(() => {
    dispatch(fetchCourses(pageIndex, 8));
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
      <Carousel />
      <h1 className="display-4 text-center">Danh sách khóa học</h1>
      <div className="container col-md-10">
        <div className="row">{_renderCourseItem()}</div>
        <Pagination
          _changePage={_changePage}
          totalPages={courses.totalPages}
          pageIndex={pageIndex}
        />
      </div>
    </>
  );
};

export default connect(state => ({
  courses: state.course.courses || { items: [] },
  pageIndex: state.course.pageIndex
}))(HomeScreen);
