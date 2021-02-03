import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import AddWorkoutForm from './AddWorkoutForm/AddWorkoutForm';

const useStyles = makeStyles(() => 
    createStyles({
        articleTitle: {
            marginTop: '100px'
        }
    })
);

const AddWorkout = () => {
    const classes = useStyles();

    return (
        <Container component='section' maxWidth='lg'>
            <Typography variant='h1' className={classes.articleTitle} color='primary' align='center'>
                Add a Workout
            </Typography>
            <AddWorkoutForm />
        </Container>
    )
}

export default AddWorkout;