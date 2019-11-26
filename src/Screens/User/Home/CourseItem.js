import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PlaceholderImg from "../../../images/imgnotfound.png";
import { positions } from "@material-ui/system";

const styles = theme => ({
  text: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  button: {
    fontFamily: "Raleway, sans-serif"
  }
});

const useStyles = makeStyles({
  card: {
    maxWidth: 250
  },
  media: {
    height: 130
  }
});

const CourseItem = props => {
  const { classes } = props;
  const { hinhAnh, tenKhoaHoc, moTa, maKhoaHoc } = props.course;
  return (
    <div className="mb-4">
      <Card className={classes.card}>
        <CardActionArea>
          <img
            className={classes.media}
            src={hinhAnh}
            onError={e => {
              e.target.onerror = null;
              e.target.src = PlaceholderImg;
            }}
            // onerror={`this.src=${PlaceholderImg}`}
            alt={tenKhoaHoc}
            style={{
              height: 250
            }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.text}
            >
              {tenKhoaHoc}
            </Typography>
            <div className={classes.text}>
              <Typography variant="body2" color="textSecondary" component="p">
                {moTa}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/detail/${maKhoaHoc}`}>
            <div className={classes.button}>
              <Button size="large" color="primary">
                SIGN
              </Button>
            </div>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(CourseItem);
