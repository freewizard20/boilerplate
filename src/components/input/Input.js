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
import "./input.css";

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
            <h2 className="title">새 시나리오</h2>
            <h3 className="subtitle">지금 투자해야 하는 이유 (현재 상황)</h3>
            <TextField
              id="outlined-multiline-static"
              className="now-textfield"
              label="입력"
              multiline
              rows={5}
              variant="outlined"
            />
            <h3 className="subtitle">
              투자원칙{" "}
              <button className={classes.settings}>
                <CreateIcon />
              </button>
            </h3>
            <ul className="principle-list">
              <li>
                <button className="principal-item">
                  주식을 절대 얼마 이하로 팔지 마라.
                </button>
              </li>
              <li>
                <button className="principal-item">
                  주식을 절대 얼마 이하로 팔지 마라.
                </button>
              </li>
              <li>
                <button className="principal-item">
                  주식을 절대 얼마 이하로 팔지 마라.
                </button>
              </li>
              <li>
                <button className="principal-item green">
                  확률을 고려하고 손절매해라.
                </button>
              </li>
            </ul>
            <h3 className="subtitle">
              자문자답{" "}
              <button className={classes.settings}>
                <CreateIcon />
              </button>
            </h3>
            <ul className="self-list">
              <li>
                <h4 className="self-list-label">똥은 쌌는지?</h4>
                <TextField
                  id="outlined-multiline-static"
                  className="self-textfield"
                  label="입력"
                  multiline
                  rows={2}
                  variant="outlined"
                />
              </li>
              <li>
                <h4 className="self-list-label">똥은 쌌는지?</h4>
                <TextField
                  id="outlined-multiline-static"
                  className="self-textfield"
                  label="입력"
                  multiline
                  rows={2}
                  variant="outlined"
                />
              </li>
              <li>
                <h4 className="self-list-label">똥은 쌌는지?</h4>
                <TextField
                  id="outlined-multiline-static"
                  className="self-textfield"
                  label="입력"
                  multiline
                  rows={2}
                  variant="outlined"
                />
              </li>
            </ul>
            <h3 className="subtitle">시나리오</h3>
            <ul className="scenario-list">
              <li>10200, $10000 BUY</li>
              <li>10000, $10000 BUY</li>
              <li>9800, $10000 BUY</li>
              <li>9500, $30000 손절매</li>
              <li>
                <input className="scenario-input" type="text"></input>
              </li>
            </ul>
            <Fab
              size="small"
              color="primary"
              aria-label="add"
              className={classes.margin}
            >
              <AddIcon style={{ color: "white", marginTop: "6px" }} />
            </Fab>
            <h3 className="subtitle">손익계산</h3>
            <ul className="calculation-list">
              <li>
                최대 손실금액 : &nbsp;
                <input type="text" className="calculation-input" />
              </li>
              <li>
                투자기간 :
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" className="calculation-input" />
              </li>
              <li>
                기대 수익 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" className="calculation-input" />
              </li>
            </ul>

            <Button
              variant="contained"
              color="primary"
              style={{
                color: "white",
                fontSize: "17px",
                margin: "0 auto",
                display: "block",
                marginTop: "50px",
              }}
            >
              투자 승인
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
