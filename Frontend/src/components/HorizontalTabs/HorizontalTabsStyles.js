import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.colors.nonTextWhite,
        width: '100%'
    },
    divAppBarStyle: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: theme.colors.darkGrey
    },
    label: {
        color: theme.colors.textWhite,
        fontFamily: 'Avenir-Medium'
    }
}));