import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    spinnerDiv: {
        justifyContent: 'center',
        display: 'flex'
    },
    whiteContainerStyle: {
        width: '100%',
        backgroundColor: theme.colors.nonTextWhite
    },
    darkGreyHeaderTextStyle: {
        color: theme.colors.darkGrey
    }
}));