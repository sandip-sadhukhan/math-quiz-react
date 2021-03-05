import {Typography, Container, RadioGroup, FormControlLabel, Radio, Button, Grid } from '@material-ui/core';

import useStyles from './styles'


const MenuScreen = ({value, onchange, toggleScrren}) => {
    
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="sm" className={classes.container}>
                <Typography variant="h2" color="textPrimary" align="center" gutterBottom>
                    Math Quiz
                    </Typography>
                <Typography variant="h6" align="center" paragraph>
                    A game for improving math skills. This game has 3 difficulties that is easy, medium, hard. Select the difficulties and Play the game. Developed with ❤️ by Sandip Sadhukhan.
                    </Typography>
                <div>
                    <RadioGroup aria-label="level" name="level" value={value} onChange={e => onchange(e)} className={classes.radios}>
                        <FormControlLabel value="easy" control={<Radio />} label="Easy" />
                        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                        <FormControlLabel value="hard" control={<Radio />} label="Hard" />
                    </RadioGroup>
                    <Grid container justify="center" style={{ marginTop: '13px' }}>
                        <Button variant="contained" color="primary"
                            className={classes.button} onClick={toggleScrren} >start</Button>

                    </Grid>
                </div>
            </Container>
        </>
    );
}

export default MenuScreen;