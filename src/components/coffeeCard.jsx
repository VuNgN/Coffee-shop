import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  title: {
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    overflow: "hidden"
  },
  cardMedia: {
    height: 0,
    paddingTop: "100%"
  },
  description: {
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    overflow: "hidden"
  }
});
export default function CoffeCard({
  title,
  price,
  description,
  avatarUrl,
  imageUrl
}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={avatarUrl}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={<p className={classes.title}>{title}</p>}
        subheader={price}
      />
      <CardMedia className={classes.cardMedia} image={imageUrl} />
      <CardContent>
        <Typography
          className={classes.description}
          color="textSecondary"
          gutterBottom
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" size="small">
          Buy now
        </Button>
        <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  );
}
