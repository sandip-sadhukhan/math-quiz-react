import { Typography, Container, ButtonGroup, Button, Grid, TextField } from '@material-ui/core';
import { useState, useEffect } from 'react';
import useStyles from './styles'

const QuestionScreen = ({ toggleScrren, level }) => {

    let timespeed, length;
    switch(level){
        case 'easy': 
            timespeed = 10;
            length = 1;
            break;
        case 'medium':
            timespeed = 5;
            length = 2;
            break;
        case 'hard':
            timespeed = 5;
            length = 3;
            break;
        default: 
            timespeed = 10;
            length = 11;
    }

    useEffect(() => {
        generateQuestion();
        // timeStart()

        let a = setInterval(() => {
            setTime(time => {
                if (time === 0) {
                    submitHandler();
                    setTime(timespeed)
                    // console.log("what");
                }
                return time - 1;
            });
            // console.log(time);
        }, 1000);

        return () => {
            clearInterval(a);
            // console.log('clorck dismount');
        }
    }, []);

    // useEffect(() => {
    //     return () => {

    //     }
    // }, [])


    const operators = ['+', '-', '*']

    const classes = useStyles();

    const [title, setTitle] = useState({ text: 'Play!', color: 'textPrimary' })
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(timespeed);
    const [answer, setAnswer] = useState('');
    const [question, setQuestion] = useState({ q: '', a: '' });
    // q - question
    // a - answer

    const changeScore = (value) => {
        // if value is 1 then +1
        // if value is -1 then -1
        setScore(score => score + value);
    }

    const generateQuestion = () => {
        let num1 = Math.floor(Math.random() * Math.pow(10, length));
        let num2 = Math.floor(Math.random() * Math.pow(10, length));
        let op = operators[Math.floor(Math.random() * operators.length)]
        let question = `${num1} ${op} ${num2} = ?`;
        let answer;
        switch (op) {
            case '+':
                answer = num1 + num2;
                break;
            case '-':
                answer = num1 - num2;
                break;
            case '÷':
                answer = num1 / num2;
                break;
            case '*':
                answer = num1 * num2;
                break;
            default:
                break;
        }
        setQuestion({ 'q': question, 'a': answer })
    }

    const checkAnswer = () => {
        if (parseInt(answer) === question.a) {
            // not check the type
            changeScore(1);
            setTitle({ text: 'Hurrah! 🤩', color: 'primary' })
        } else {
            changeScore(-1);
            setTitle({ text: 'Sad! 😥', color: 'secondary' })
        }
    }

    const submitHandler = () => {
        checkAnswer();
        generateQuestion();
        setAnswer('')

        setTime(timespeed)
    }

    const timeStart = () => {
    }

    return (
        <>
            <Container maxWidth="sm" className={classes.container}>
                <Typography variant="h2" color={title.color} align="center" gutterBottom>
                    {title.text}
                </Typography>
                <div>
                    <Grid container justify="center" style={{ marginTop: '13px' }}>
                        <ButtonGroup variant="outlined" color="primary" size="large" >
                            <Button>Time : {time} Sec</Button>
                            <Button>Score : {score}</Button>
                        </ButtonGroup>

                    </Grid>
                </div>
                <div style={{ marginTop: '15px' }}>
                    <Typography variant="h3" color="textPrimary" align="center" gutterBottom>
                        {question.q}
                    </Typography>

                    <Grid container justify="center" style={{ marginTop: '13px' }}>

                        <TextField type="number" autoFocus id="outlined-basic" label="Enter Answer..." variant="outlined" autoComplete="off" value={answer} onChange={e => setAnswer(e.target.value)}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    submitHandler()
                                }
                            }} />
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '13px' }}>
                        <Button variant="contained" color="primary" onClick={submitHandler}>
                            Submit
                        </Button>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '13px' }}>
                        <Button variant="contained" color="default" onClick={toggleScrren}>
                            Back
                        </Button>
                    </Grid>
                </div>
            </Container>
        </>
    );
}

export default QuestionScreen;