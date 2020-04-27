import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    darkGreyContainerStyle: {
        backgroundColor: theme.colors.darkGrey,
        width: '100%',
        paddingTop: '5em',
        paddingBottom: '5em'
    },
    whiteContainerStyle: {
        backgroundColor: theme.colors.nonTextWhite,
        width: '80%',
        borderRadius: 10,
        padding: '1em 2em 5em 2em'
    },
    regAvenirStyle: {
        fontFamily: 'Avenir',
        textAlign: 'left'
    },
    headerMedStyle: {
        fontFamily: 'Avenir-Medium',
        textAlign: 'left'
    }
}));