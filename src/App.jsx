import { useState } from 'react';
import { AppBar, Toolbar, CssBaseline, Typography} from '@material-ui/core';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import MenuScreen from './MenuScreen';
import QuestionScreen from './QuestionScreen';

import useStyles from './styles'

const App = () => {
    const classes = useStyles();

    const [state, setState] = useState({level: 'medium', menu: true});

    const handleChange = (event) => {
        // setState(... , level: event.target.value);
        setState({...state, level: event.target.value})
    };

    const toggleScrren = () => {
        setState({...state, menu: !state.menu})
    }

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <LocalLibraryIcon className={classes.icons} />
                    <Typography variant="h6">
                        MathQuiz
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {
                    state.menu
                    ?<MenuScreen toggleScrren={toggleScrren} value={state.level} onchange={handleChange} />
                    : <QuestionScreen level={state.level} toggleScrren={toggleScrren} />
                }
            </main>
        </>
    );
}

export default App;
