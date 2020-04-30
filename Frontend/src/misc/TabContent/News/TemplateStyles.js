import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    whiteContainerStyle: {
        backgroundColor: theme.colors.nonTextWhite,
        paddingBottom: '5em'
    },
    gridBottomMarginStyle: {
        marginBottom: '5rem'
    }
}));