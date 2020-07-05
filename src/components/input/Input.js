import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import CreateIcon from '@material-ui/icons/Create';
import TextField from '@material-ui/core/TextField';
import './input.css';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 720,
        margin: "20px auto",
        textAlign: "left"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    settings: {
        position: "relative",
        top: "3px",
        left: "1px",
        color: "#209cee",
        borderRadius: "50%",
        backgroundColor: "white",
        border: "none"
    }
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
                        <h3 className="subtitle">투자원칙 <button className={classes.settings}><CreateIcon /></button></h3>
                        <ul className="principle-list">
                            <li><button className="principal-item">주식을 절대 얼마 이하로 팔지 마라.</button></li>
                            <li><button className="principal-item green">확률을 고려하고 손절매해라.</button></li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}