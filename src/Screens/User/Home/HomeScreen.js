import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CourseItem from './CourseItem';

import { fetchCourses, changePageCourse } from '../../../Redux/Actions/Course';
import Pagination from '../../../Components/Pagination';

const HomeScreen = ({ dispatch, courses, pageIndex }) => {
  useEffect(() => {
    dispatch(fetchCourses(pageIndex, 5));
  }, []);

  const _renderCourseItem = () => {
    return courses.items.map((item, index) => (
      <div className="col-4" key={index}>
        <CourseItem course={item} />
      </div>
    ));
  };

  const _changePage = chosenPage => {
    dispatch(changePageCourse(chosenPage));
    dispatch(fetchCourses(chosenPage, 5));
  };

  return (
    <>
      <h1 className="display-4 text-center">Home Screen</h1>
      <div className="container">
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
  pageIndex: state.course.pageIndex,
}))(HomeScreen);