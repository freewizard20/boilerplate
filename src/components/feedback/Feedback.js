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
import ControlledAccordions from "./ControlledAccordions";

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

export default function Feedback() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <h2 className="title">사후평가</h2>
          <h3 className="subtitle">진행중 거래</h3>

          <h3 className="subtitle">완료된 거래</h3>
          <ControlledAccordions />
        </CardContent>
      </Card>
    </>
  );
}
