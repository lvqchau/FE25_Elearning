import React from "react";
import { Link } from "react-router-dom";
import PlaceholderImg from "../../../images/imgnotfound.png";
import "../../../css/_courseItem.scss";

// const styles = theme => ({
//   text: {
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     textOverflow: "ellipsis"
//   },
//   button: {
//     fontFamily: "Raleway, sans-serif"
//   }
// });

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 250
//   },
//   media: {
//     height: 130
//   }
// });

const CourseItem = props => {
  const { hinhAnh, tenKhoaHoc, moTa, maKhoaHoc } = props.course;
  return (
    // <div className="mb-4">
    //   <Card className={classes.card}>
    //     <CardActionArea>
    //       <img
    //         className={classes.media}
    //         src={hinhAnh}
    //         onError={e => {
    //           e.target.onerror = null;
    //           e.target.src = PlaceholderImg;
    //         }}
    //         // onerror={`this.src=${PlaceholderImg}`}
    //         alt={tenKhoaHoc}
    //         style={{
    //           height: 250
    //         }}
    //       />
    //       <CardContent>
    //         <Typography
    //           gutterBottom
    //           variant="h5"
    //           component="h2"
    //           className={classes.text}
    //         >
    //           {tenKhoaHoc}
    //         </Typography>
    //         <div className={classes.text}>
    //           <Typography variant="body2" color="textSecondary" component="p">
    //             {moTa}
    //           </Typography>
    //         </div>
    //       </CardContent>
    //     </CardActionArea>
    //     <CardActions>
    //       <Link to={`/detail/${maKhoaHoc}`}>
    //         <div className={classes.button}>
    //           <Button size="large" color="primary">
    //             SIGN
    //           </Button>
    //         </div>
    //       </Link>
    //     </CardActions>
    //   </Card>
    // </div>
    <div className="product__items">
      <div className="product__item">
        <Link to={`/detail/${maKhoaHoc}`}>
          <div className="item__img">
            <img
              src={hinhAnh}
              onError={e => {
                e.target.onerror = null;
                e.target.src = PlaceholderImg;
              }}
              alt="item"
              style={{
                height: 160,
                width: 250
              }}
            />
            <div className="img__overlay" />
          </div>
          <div className="item__info">
            <h5>
              {tenKhoaHoc.length > 45
                ? tenKhoaHoc.substr(0, 45) + "..."
                : tenKhoaHoc}
            </h5>
            <h6>{moTa}</h6>
            <div className="rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
              <i className="far fa-star" />
              <span className="score">
                3.5 <span className="reviews">(176,466)</span>
              </span>
            </div>
            <div className="price">
              <span className="old__price">$199.99</span>
              <span className="price">
                $19.99 <i className="fas fa-tag"></i>
              </span>
            </div>
          </div>
        </Link>
        <span className="best__seller">BEST</span>
      </div>
    </div>
  );
};

// export default withStyles(styles)(CourseItem);

export default CourseItem;
