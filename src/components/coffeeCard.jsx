import React from "react";
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardHeader,
  Avatar,
  CardMedia,
  IconButton
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import useTheme from "@material-ui/core/styles/useTheme";

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
  const theme = useTheme();
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
      <CardActions
        style={
          window.innerWidth <= theme.breakpoints.values.md
            ? {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between"
              }
            : {}
        }
      >
        <Button
          variant="contained"
          color="primary"
          size={
            window.innerWidth <= theme.breakpoints.values.md
              ? "large"
              : "medium"
          }
          fullWidth={
            window.innerWidth <= theme.breakpoints.values.md ? true : false
          }
        >
          Buy now
        </Button>
        <Button
          style={
            window.innerWidth <= theme.breakpoints.values.md
              ? {
                  margin: "5px 0 0"
                }
              : {}
          }
          size={
            window.innerWidth <= theme.breakpoints.values.md
              ? "large"
              : "medium"
          }
          fullWidth={
            window.innerWidth <= theme.breakpoints.values.md ? true : false
          }
        >
          Offer
        </Button>
      </CardActions>
    </Card>
  );
}
