import React, { useEffect } from "react";
import "../../../css/_detailScreen.scss";
import img from "../../../images/imgnotfound.png";
import teacher from "../../../images/teacher3.jpg";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchACourse } from "../../../Redux/Actions/Course";

const DetailScreen = props => {
  const { match, fetchACourse, course } = props;
  const courseId = match.params.courseId;
  useEffect(() => {
    fetchACourse(courseId);
  });
  return (
    <div className="courseList">
      <br />
      <br />
      <br />
      <br />
      <div className="breadcrumb">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h1>COURSES</h1>
            <h6>HOME/COURSE/{courseId}</h6>
          </div>
        </div>
      </div>
      <div className="item__content">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 pl-0 content">
              <div className="content__title">
                <h1>{course.tenKhoaHoc}</h1>
                <div className="intro__title pl-0">
                  <div className="teacher px-0">
                    <img src={teacher} alt="intro" />
                    <div className="teacher__name">
                      <div>Teacher</div>
                      <div>Robert Richards</div>
                    </div>
                  </div>
                  <div className="category">
                    <span className="lnr lnr-layers" />
                    <div className="category__name">
                      <div>Category</div>
                      <div>Apache, Computer Science, PHP, CSS, JS</div>
                    </div>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <i className="far fa-star" />
                    <span>3.5 </span>
                    <div>500 reviews</div>
                  </div>
                </div>
              </div>
              <div className="description">
                <p>{course.moTa}</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum ullam eaque placeat necessitatibus. Quasi quae a
                  deleniti laboriosam, numquam assumenda recusandae provident
                  sapiente aperiam nisi? Ut numquam qui tempora dignissimos.
                </p>
              </div>
              <div className="knowledge">
                <h5>What you'll learn</h5>
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                    <ul>
                      <li>
                        <i /> <span class="lnr lnr-checkmark-circle"></span>{" "}
                        Learn to use Python professionally, learning both Python
                        2 and Python 3!
                      </li>
                      <li>
                        <i /> <span class="lnr lnr-checkmark-circle"></span>{" "}
                        Learn advanced Python features, like the collections
                        module and how to work with timestamps!
                      </li>
                      <li>
                        <i /> <span class="lnr lnr-checkmark-circle"></span>{" "}
                        Understand complex topics, like decorators.
                      </li>
                      <li>
                        <i /> <span class="lnr lnr-checkmark-circle"></span> Get
                        an understanding of how to create GUIs in the Jupyter
                        Notebook system!
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                    <ul>
                      <li>
                        <i />
                        <span class="lnr lnr-checkmark-circle"></span> Create
                        games with Python, like Tic Tac Toe and Blackjack!
                      </li>
                      <li>
                        <i />
                        <span class="lnr lnr-checkmark-circle"></span> Learn to
                        use Object Oriented Programming with classes!
                      </li>
                      <li>
                        <i />
                        <span class="lnr lnr-checkmark-circle"></span>{" "}
                        Understand how to use both the Jupyter Notebook and
                        create .py files
                      </li>
                      <li>
                        <i />
                        <span class="lnr lnr-checkmark-circle"></span> Build a
                        complete understanding of Python! from the ground up!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="course__section">
                <h5>Course content</h5>
                <div className="sections">
                  <div className="section__item">
                    <div className="section__header">
                      <div>
                        SECTION 1: INTRODUCTION
                        <span>Preview</span>
                      </div>
                    </div>
                    <div className="section__entry">
                      <div className="gap" />
                      <div className="lessons">
                        <div className="lessons__header">
                          <div>Lessons</div>
                          <ul>
                            <li>
                              <i />
                              How to obtain your Certificate of Completion for
                              this course
                              <span>
                                <i />
                                <span class="lnr lnr-clock"></span> 15:32
                              </span>
                            </li>
                            <li>
                              <i />
                              Working Files – Download These First
                              <span>
                                <i />
                                <span class="lnr lnr-clock"></span> 14:24
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section__item">
                    <div className="section__header">
                      <div>
                        SECTION 2: WORKSPACE AND PREFERENCES
                        <span>Preview</span>
                      </div>
                    </div>
                    <div className="section__entry">
                      <div className="gap" />
                      <div className="lessons">
                        <div className="lessons__header">
                          <div>Lessons</div>
                          <ul>
                            <li>
                              <i />
                              Get In Total Control Of The Control Panel
                              <span>
                                <i />
                                <span class="lnr lnr-clock"></span> 15:32
                              </span>
                            </li>
                            <li>
                              <i />
                              The Magic Of Auto Recovery
                              <span>
                                <i />
                                <span class="lnr lnr-clock"></span> 15:32
                              </span>
                            </li>
                            <li>
                              <i /> Customize The Workspace
                              <span>
                                <i />
                                <span class="lnr lnr-clock"></span> 15:32
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section__item">
                    <div className="section__header">
                      <div>SECTION 3: LAYOUT</div>
                    </div>
                    <div className="section__entry">
                      <div className="gap" />
                      <div className="lessons">
                        <div className="lessons__header">
                          <div>Lessons</div>
                          <ul>
                            <li>
                              <i />
                              Outside-The-Box Thinking With Grids
                              <span>
                                <i />
                                <span class="lnr lnr-clock"></span> 15:32
                              </span>
                            </li>
                            <li>
                              <i /> Creating Saving And Opening Documents
                              <span>
                                <i />
                                <span class="lnr lnr-clock"></span> 15:32
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 pr-0 sidebar">
              <div className="sidebar__info">
                <div className="info__img">
                  <img
                    src={course.hinhAnh}
                    onError={e => {
                      e.target.onerror = null;
                      e.target.src = img;
                    }}
                    alt="item"
                    style={{
                      height: 300
                    }}
                  />
                </div>
                <div className="info__inner">
                  <div className="wishlist">
                    <div className="add__list">
                      <div className="heart">
                        <i className="lnr lnr-heart" />
                      </div>
                      <span>Add to Wishlist</span>
                    </div>
                    <span className="price">$19.99</span>
                  </div>
                  <button className="add">SIGN NOW</button>
                  <ul className="meta">
                    <li>
                      <div>
                        Enrolled: <span> 3 students</span>
                      </div>
                      <i className="lnr lnr-users" />
                    </li>
                    <li>
                      <div>
                        Duration: <span> 6 hours</span>
                      </div>
                      <i className="lnr lnr-clock" />
                    </li>
                    <li>
                      <div>
                        Lectures: <span> 6</span>
                      </div>
                      <i className="lnr lnr-bullhorn" />
                    </li>
                    <li>
                      <div>
                        Video: <span> 3 hours</span>
                      </div>
                      <i className="lnr lnr-film-play" />
                    </li>
                    <li>
                      <div>
                        Level: <span> 3 Beginner</span>
                      </div>
                      <i className="lnr lnr-sort-amount-asc" />
                    </li>
                  </ul>
                  <div className="coupon">
                    <input type="text" placeholder="Enter Coupon" />
                  </div>
                </div>
              </div>
              <div className="sidebar__try">
                <h5>Training 5 or more people?</h5>
                <p>
                  Get your team access to 3,500+ top Skilled courses anytime,
                  anywhere.
                </p>
                <a href="#1">Try Skilled for Business</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    course: state.course.course
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchACourse: fetchACourse
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
