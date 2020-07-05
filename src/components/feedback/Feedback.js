import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import CreateIcon from "@material-ui/icons/Create";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 720,
    margin: "20px auto",
    textAlign: "left",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  settings: {
    position: "relative",
    top: "3.5px",
    left: "-2px",
    color: "#209cee",
    borderRadius: "50%",
    backgroundColor: "white",
    border: "none",
  },
  margin: {
    margin: "auto",
    display: "block",
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <div className="my-container">
            <h2 className="title">사후평가</h2>
            <h3 className="subtitle">진행중 거래</h3>
            <h3 className="subtitle">완료된 거래</h3>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
