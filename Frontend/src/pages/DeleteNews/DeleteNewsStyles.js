import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    darkGreyContainerStyle: {
        backgroundColor: theme.colors.darkGrey,
        width: '100%',
        paddingTop: '5em',
        paddingBottom: '5em'
    },
    whiteContainerStyle: {
        paddingTop: '1em',
        paddingBottom: '5em',
        backgroundColor: theme.colors.nonTextWhite,
        width: '60%',
        borderRadius: 10
    },
    formContainerStyle: {
        width: '100%'
    },
    spinnerDiv: {
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: theme.colors.nonTextWhite,
        height: '100%',
        width: '100%'
    },
    mainDivStyle: {
        height: '100%'
    }
}));