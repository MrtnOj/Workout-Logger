import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import classes from '*.module.css';

const workouts = [
    {
        value: 'x-country-skiing',
        label: 'Cross-country skiing'
    },
    {
        value: 'running',
        label: 'Running'
    },
    {
        value: 'gym',
        label: 'Gym'
    },
    {
        value: 'cycling',
        label: 'Cycling'
    },
    {
        value: 'swimming',
        label: 'Swimming'
    }
]

const useStyles = makeStyles(() => 
    createStyles({
        root: {
            margin: '45px 0'
        }
    })
)


const AddWorkoutForm = () => {
    const classes = useStyles();
    const [workout, setWorkout] = useState('Running')

    const workoutSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWorkout(event.target.value)
    }

    return (
        <form className={classes.root}>
            <TextField 
                id='workout-type'
                select
                label='WorkoutType'
                variant='outlined'
                fullWidth={true}
                value={workout}
                onChange={workoutSelectChange}
            >
                {workouts.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </form>
    )
}

export default AddWorkoutForm;