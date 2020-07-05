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
        <CardContent style={{ padding: 0 }}>
          <h2 className="title-feedback">진행중 거래</h2>
        </CardContent>
      </Card>
    </>
  );
}
