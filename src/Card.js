import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typo from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    textAlign: "center",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 10,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typo className={classes.title} color="textSecondary" gutterBottom>
           COMPLAINTS TABLE
        </Typo>
      </CardContent>
    </Card>
  );
}

