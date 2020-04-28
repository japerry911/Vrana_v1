import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    darkGreyContainerStyle: {
        backgroundColor: theme.colors.darkGrey,
        width: '100%',
        paddingTop: '5em',
        paddingBottom: '5em'
    },
    mainDivStyle: {
        height: '100%'
    }
}));