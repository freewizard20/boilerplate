import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="p">
                        새 시나리오(현황, 원칙, 자문자답, 시나리오)
                    </Typography>

                </CardContent>
            </Card>
        </>
    );
}