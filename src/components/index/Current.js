import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AddIcon from "@material-ui/icons/Add";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./current.css";
import CreateIcon from "@material-ui/icons/Create";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 720,
    margin: "20px auto",
    textAlign: "left",
    padding: 0,
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
    top: "5px",
    left: "1px",
    color: "#209cee",
    borderRadius: "50%",
    backgroundColor: "white",
    border: "none",
  },
  margin: {
    margin: "auto",
    display: "block",
    marginBottom: "20px",
  },
});

export default function Feedback() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent style={{ padding: 0 }}>
          <h2 className="title-feedback">진행중 거래</h2>
          <Divider />
          <div className="index-details">
            <h3 className="subtitle-feedback">
              2020-07-04 18:36
              <button className={classes.settings}>
                <CreateIcon />
              </button>
            </h3>
            <Button
              variant="contained"
              color="primary"
              className="current-details-button"
              style={{
                color: "white",
                padding: "0px 10px",
                margin: "10px",
                fontSize: "16px",
              }}
            >
              상세 내용 보기
            </Button>
          </div>
          <div className="index-details-main">
            <div className="index-details-scenario">
              <h3 className="subtitle-feedback" style={{ marginTop: "0px" }}>
                시나리오
              </h3>
              <ul className="scenario-list">
                <li>10200, $10000 BUY</li>
                <li>10000, $10000 BUY</li>
                <li>9800, $10000 BUY</li>
                <li>9500, $30000 손절매</li>
              </ul>
            </div>
            <div className="index-details-scenario">
              <h3 className="subtitle-feedback" style={{ marginTop: "0px" }}>
                매매일지
              </h3>
              <ul className="scenario-list">
                <li>10200, $10000 BUY</li>
                <li>10000, $10000 BUY</li>
                <li>9800, $10000 BUY</li>
                <li>9500, $30000 손절매</li>
                <li>
                  <input className="scenario-input" type="text"></input>
                  <button
                    className="addbutton"
                    style={{
                      marginLeft: "8px",
                      position: "relative",
                      top: "6px",
                    }}
                  >
                    <AddIcon style={{ color: "white", marginTop: "2px" }} />
                  </button>
                </li>
              </ul>
              {/* <Fab
                size="small"
                color="primary"
                aria-label="add"
                className={classes.margin}
              >
                <AddIcon style={{ color: "white", marginTop: "6px" }} />
              </Fab> */}
            </div>
          </div>
          <Divider />
          <div style={{ padding: "16px" }}>
            <h3
              className="subtitle-feedback"
              style={{ marginTop: "0px", marginLeft: "0px" }}
            >
              시황 기록
            </h3>
            <TextField
              id="outlined-multiline-static"
              className="self-textfield"
              label="입력"
              multiline
              rows={4}
              variant="outlined"
            />
          </div>
          <Divider />
          <h3
            className="subtitle-feedback"
            style={{ margin: "16px", marginBottom: "0px" }}
          >
            최종 결산
          </h3>
          <div
            style={{
              padding: "16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <input className="scenario-input" type="text"></input>
              <button
                className="addbutton"
                style={{
                  marginLeft: "8px",
                  position: "relative",
                  top: "2px",
                  color: "white",
                  fontSize: "17px",
                  padding: "3px 10px",
                }}
              >
                수익
              </button>
            </div>
            <div>
              <button
                className="addbutton"
                style={{
                  marginLeft: "8px",
                  position: "relative",
                  top: "2px",
                  color: "white",
                  fontSize: "17px",
                  padding: "3px 10px",
                }}
              >
                최종 제출
              </button>
              <button
                className="removebutton"
                style={{
                  marginLeft: "8px",
                  position: "relative",
                  top: "2px",
                  color: "white",
                  fontSize: "17px",
                  padding: "3px 10px",
                }}
              >
                삭제
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
