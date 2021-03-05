import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container : {
        marginTop: '100px'
    },
    icons: {
        marginRight: theme.spacing(2)
    },
    radios: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center'
    },button: {
        margin: theme.spacing(1),
      },
}))


export default useStyles;