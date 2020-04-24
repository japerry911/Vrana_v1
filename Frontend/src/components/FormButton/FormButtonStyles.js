import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    gridItemStyle: {
        paddingTop: '3em'
    },
    buttonTextStyle: {
        color: theme.colors.textWhite
    },
    buttonStyle: {
        backgroundColor: theme.colors.vranaRed,
        borderRadius: 10,
        width: '25%'
    }
}));