import React, { useEffect } from "react";

const DetailScreen = (props) => {
  useEffect(() => {
    const courseId = props.match.params.courseId;
  }, []);
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
};

export default DetailScreen;
